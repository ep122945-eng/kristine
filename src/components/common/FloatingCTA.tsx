import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end space-y-4">
      {/* Messenger CTA */}
      <motion.a
        href="https://m.me/kristinebeauty"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-pink text-brand-mocha rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageSquare size={24} />
      </motion.a>

      {/* Book Now Sticky (Desktop) */}
      <Link to="/shop">
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="luxury-button flex items-center space-x-2 shadow-2xl"
        >
          <ShoppingBag size={18} />
          <span className="tracking-widest uppercase text-xs">Shop Collection</span>
        </motion.button>
      </Link>
    </div>
  );
}
