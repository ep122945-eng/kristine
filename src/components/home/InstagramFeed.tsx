import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const INSTA_POSTS = [
  { id: 1, img: 'https://images.unsplash.com/photo-1512496011956-621ca7ba00a3?auto=format&fit=crop&w=400&q=80', likes: '1.2k' },
  { id: 2, img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80', likes: '850' },
  { id: 3, img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80', likes: '2.4k' },
  { id: 4, img: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=400&q=80', likes: '1.1k' },
  { id: 5, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80', likes: '3.2k' },
  { id: 6, img: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80', likes: '980' },
];

export default function InstagramFeed() {
  return (
    <section className="bg-brand-beige border-y border-brand-mocha/5">
      <div className="flex flex-col items-center py-10 px-6">
        <a 
          href="https://instagram.com/kristinebeauty" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 mb-10 group"
        >
          <div className="w-12 h-12 rounded-full border border-brand-mocha/20 flex items-center justify-center transition-colors group-hover:bg-brand-mocha group-hover:text-white">
            <Instagram size={20} />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-mocha-light">Follow us on IG</p>
            <p className="text-lg font-display font-medium text-brand-mocha tracking-wider">@kristinebeauty</p>
          </div>
        </a>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {INSTA_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square group cursor-pointer overflow-hidden"
            >
              <img
                src={post.img}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-mocha/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-white">
                <div className="flex items-center space-x-1">
                  <Heart size={16} fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-widest">{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle size={16} fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-widest">Post</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
