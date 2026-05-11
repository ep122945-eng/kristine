import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useCart } from '@/src/context/CartContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled ? 'bg-brand-nude/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center group">
          <span className="text-xl md:text-2xl font-display font-bold tracking-widest text-brand-mocha uppercase group-hover:text-brand-gold transition-colors">
            Kristine
          </span>
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] text-brand-mocha-light uppercase -mt-1">
            Beauty Studio
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-brand-mocha">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-brand-gold relative group',
                location.pathname === link.path ? 'text-brand-gold' : 'text-brand-mocha'
              )}
            >
              {link.name}
              <span 
                className={cn(
                  'absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full',
                  location.pathname === link.path && 'w-full'
                )} 
              />
            </Link>
          ))}
          
          <div className="flex items-center space-x-6 pl-6 border-l border-brand-mocha/10">
            <button className="hover:text-brand-gold transition-colors">
              <Search size={18} />
            </button>
            <button className="hover:text-brand-gold transition-colors">
              <User size={18} />
            </button>
            <Link to="/checkout" className="relative hover:text-brand-gold transition-colors">
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle & Cart */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/checkout" className="relative text-brand-mocha">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="text-brand-mocha p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-nude border-b border-brand-beige md:hidden flex flex-col p-8 space-y-6 shadow-xl"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-display tracking-widest text-brand-mocha uppercase hover:text-brand-gold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/checkout"
              className="luxury-button text-center uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Checkout Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
