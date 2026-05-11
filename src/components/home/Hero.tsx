import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Studio Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-nude/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-nude via-brand-nude/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs md:text-sm font-sans font-bold tracking-[0.4em] uppercase text-brand-mocha-light mb-6 border-b border-brand-mocha/20 pb-2"
          >
            Boutique Aesthetic Studio
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] text-brand-mocha mb-8"
          >
            Pure Luxury. <br />
            <span className="serif-italic text-brand-gold">Delivered</span> <br />
            To Your Door
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl font-sans text-brand-mocha-light leading-relaxed mb-10 max-w-lg"
          >
            Shop our curated collection of professional beauty kits, clinical skincare, and exclusive studio-grade products. Professional results, from the comfort of home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/shop" className="luxury-button group flex items-center justify-center">
              <span>Start Shopping</span>
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link to="/about" className="luxury-button-outline flex items-center justify-center">
              Our Philosophy
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex flex-wrap gap-8 opacity-60"
          >
            {[
              { icon: Award, label: 'Certified Studio' },
              { icon: ShieldCheck, label: 'Premium Products' },
              { icon: Star, label: '5-Star Experience' }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <badge.icon size={16} />
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-brand-mocha border-dashed floating" />
      </div>
    </section>
  );
}
