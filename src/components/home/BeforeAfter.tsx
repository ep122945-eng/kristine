import { useState, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const BA_IMAGES = [
  {
    category: 'Lash Extensions',
    before: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1583001809272-132d887a070c?auto=format&fit=crop&w=800&q=80'
  }
];

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleMove = (e: ReactMouseEvent | ReactTouchEvent) => {
    if (!isResizing) return;
    
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  return (
    <section className="section-padding bg-brand-nude">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light block">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-6xl font-display leading-[1.2]">
            Transformations that <br />
            <span className="serif-italic">Speak for Themselves</span>
          </h2>
          <p className="text-brand-mocha-light leading-relaxed text-lg max-w-md">
            Our precision-focused techniques ensure every client leaves feeling their most confident self. Swipe to see the magic of our lash and brow services.
          </p>
          <div className="flex gap-10 py-6 border-y border-brand-mocha/10">
            <div>
              <p className="text-2xl font-display font-bold">5k+</p>
              <p className="text-[10px] tracking-widest uppercase font-bold text-brand-mocha/40">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold">12+</p>
              <p className="text-[10px] tracking-widest uppercase font-bold text-brand-mocha/40">Certifications</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div 
            className="relative aspect-square md:aspect-video rounded-[2rem] overflow-hidden cursor-ew-resize select-none"
            onMouseMove={handleMove}
            onMouseDown={() => setIsResizing(true)}
            onMouseUp={() => setIsResizing(false)}
            onMouseLeave={() => setIsResizing(false)}
            onTouchMove={handleMove}
            onTouchStart={() => setIsResizing(true)}
            onTouchEnd={() => setIsResizing(false)}
          >
            {/* After Image */}
            <img 
              src={BA_IMAGES[0].after} 
              alt="After" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={BA_IMAGES[0].before} 
                alt="Before" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Slider Line */}
            <div 
              className="absolute inset-y-0 w-0.5 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex space-x-1 text-brand-mocha">
                  <ChevronLeft size={16} />
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute inset-0 p-8 pointer-events-none flex justify-between items-start opacity-60">
              <span className="bg-brand-mocha text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">Before</span>
              <span className="bg-white text-brand-mocha text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">After</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
