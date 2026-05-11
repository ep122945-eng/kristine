import { motion } from 'motion/react';
import Hero from '@/src/components/home/Hero';
import ServicesPreview from '@/src/components/home/ServicesPreview';
import BeforeAfter from '@/src/components/home/BeforeAfter';
import Testimonials from '@/src/components/home/Testimonials';
import InstagramFeed from '@/src/components/home/InstagramFeed';
import { Link } from 'react-router-dom';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <Hero />
      
      {/* Featured Banner */}
      <div className="bg-brand-mocha py-6 overflow-hidden border-y border-brand-mocha-light/20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-8 text-[10px] tracking-[0.4em] uppercase text-brand-beige font-bold">
              <Sparkles size={14} className="mr-4 text-brand-gold" />
              Luxury Lash Extensions
              <Sparkles size={14} className="mx-4 text-brand-gold" />
              Brow Lamination
              <Sparkles size={14} className="mx-4 text-brand-gold" />
              Boutique Skincare
            </div>
          ))}
        </div>
      </div>

      <ServicesPreview />
      
      {/* Why Choose Us */}
      <section className="section-padding bg-brand-nude">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light mb-4 block">
              The Luxury Standard
            </span>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Why We Are the <span className="serif-italic">Preferred Choice</span>
            </h2>
            <p className="text-brand-mocha-light">We combine technical mastery with an artistic eye to create results that are as unique as you are.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Artist Led', desc: 'Every treatment is performed by multi-certified senior specialists.', icon: Sparkles },
              { title: 'Clean Beauty', desc: 'We only use premium, medical-grade, and cruelty-free products.', icon: Sparkles },
              { title: 'Safe Environment', desc: 'Hospital-level sanitation and a relaxing boutique atmosphere.', icon: Sparkles },
              { title: 'Custom Care', desc: 'Bespoke consultations to match your facial structure and goals.', icon: Sparkles }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-brand-mocha/10 rounded-2xl bg-white/50 hover:bg-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-mocha/5 flex items-center justify-center text-brand-mocha mb-6 group-hover:bg-brand-mocha group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-display mb-3 uppercase tracking-wider">{item.title}</h3>
                <p className="text-sm text-brand-mocha-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter />
      <Testimonials />
      
      {/* Final CTA */}
      <section className="section-padding bg-brand-mocha relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold-light rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-mocha-light rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-display text-white leading-tight">
              Ready for Your <br />
              <span className="serif-italic text-brand-gold-light">Signature Glow-Up?</span>
            </h2>
            <p className="text-brand-beige/60 text-lg max-w-xl mx-auto font-sans">
              Limited slots available for this month. Secure your luxury beauty experience today and step into your most confident self.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link to="/shop" className="bg-brand-gold text-white px-10 py-5 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-brand-gold-light hover:text-brand-mocha transition-all flex items-center group">
                <ShoppingBag className="mr-2" size={18} />
                Shop Now
              </Link>
              <Link to="/shop" className="text-brand-beige border-b border-brand-beige/20 pb-2 text-xs font-bold tracking-[0.2em] uppercase hover:text-brand-gold-light hover:border-brand-gold-light transition-all flex items-center group">
                Browse Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <InstagramFeed />
    </motion.div>
  );
}
