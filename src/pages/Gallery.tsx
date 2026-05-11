import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY } from '@/src/constants';
import { X, ZoomIn, Instagram } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Skincare', 'Makeup', 'Studio'];
  
  const filteredGallery = activeFilter === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light mb-4 block">
            Results & Inspiration
          </span>
          <h1 className="text-5xl md:text-7xl font-display mb-8">
            The <span className="serif-italic">Lookbook</span>
          </h1>
          <p className="text-brand-mocha-light text-lg mb-12">
            See how our luxury products transform and enhance. Real results from our professional collection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-8 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300",
                  activeFilter === filter 
                    ? "bg-brand-mocha text-white shadow-lg" 
                    : "bg-white text-brand-mocha/60 hover:text-brand-mocha hover:bg-brand-beige border border-brand-mocha/5"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((image, idx) => (
            <motion.div
              layout
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="relative aspect-[3/4] group cursor-pointer overflow-hidden rounded-[2rem]"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-mocha/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                <ZoomIn size={32} className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section Title */}
        <div className="mt-32 text-center mb-16">
          <h2 className="text-4xl font-display">In <span className="serif-italic">Motion</span></h2>
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha/40 mt-4 underline underline-offset-8">REELS & TRANSFORMATIONS</p>
        </div>

        {/* Video Grid Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1512496011956-621ca7ba00a3?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=400&q=80'
          ].map((src, idx) => (
            <div key={idx} className="relative aspect-[9/16] rounded-[2rem] overflow-hidden group">
              <img src={src} className="w-full h-full object-cover" alt="Reel thumbnail" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                 <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                 </div>
                 <p className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Watch Reel</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-mocha/90 backdrop-blur-lg p-6 md:p-20"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full aspect-[3/4] md:aspect-auto md:h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-[-60px] left-0 right-0 text-center text-white">
                  <p className="text-xs font-bold tracking-[0.4em] uppercase mb-2">{selectedImage.category}</p>
                  <h3 className="text-2xl font-display">{selectedImage.alt}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
