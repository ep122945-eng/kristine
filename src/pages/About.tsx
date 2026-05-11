import { motion } from 'motion/react';
import { Check, ShieldCheck, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80" 
                alt="Founder Kristine" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-pink/50 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-gold/20 rounded-full blur-3xl z-0" />
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <p className="text-3xl font-display font-medium text-brand-mocha">10+</p>
              <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Years Experience</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light block">
              The Visionary
            </span>
            <h2 className="text-4xl md:text-6xl font-display leading-[1.1]">
              A Passion for <br />
              <span className="serif-italic">Refined Elegance</span>
            </h2>
            <div className="space-y-6 text-brand-mocha-light leading-relaxed">
              <p>
                Founded in 2014 by Kristine Vance, our brand was born out of a desire to bridge the gap between clinical excellence and luxury home care.
              </p>
              <p>
                Kristine's journey began in the hauté-beauty circles of Paris and Seoul, where she discovered the transformative power of professional-grade formulas. She spent years collaborating with top dermatologists to curate a collection that brings "Invisible Enhancement" to your daily routine.
              </p>
              <p>
                Today, Kristine Beauty is a reflection of that philosophy: meticulous, premium, and deeply personal. We don't just sell products; we offer professional tools and formulas that study your facial architecture to enhance your natural radiance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { icon: Award, label: 'Pro-Grade Formulas' },
                { icon: ShieldCheck, label: 'Dermatologist Tested' },
                { icon: Heart, label: 'Cruelty-Free' },
                { icon: Sparkles, label: 'Visible Results' }
              ].map((pill, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-brand-mocha">
                  <div className="w-8 h-8 rounded-full bg-brand-mocha/5 flex items-center justify-center">
                    <pill.icon size={14} className="text-brand-gold" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-brand-mocha p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto space-y-10"
          >
            <h3 className="text-3xl md:text-5xl font-display text-white italic leading-tight">
              "We believe that real beauty doesn't shout; it whispers of self-care and unshakeable confidence through the products we use every day."
            </h3>
            <p className="text-brand-beige/60 uppercase tracking-[0.4em] text-xs font-bold">— OUR PHILOSOPHY</p>
          </motion.div>
        </div>

        {/* Product Values Section */}
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 order-2 md:order-1">
              <h2 className="text-4xl font-display">Crafted With <span className="serif-italic">Intention</span></h2>
              <div className="space-y-8">
                {[
                  { title: 'Ethical Sourcing', desc: 'Every ingredient is ethically sourced and rigorously tested to ensure the highest purity and safety standards.' },
                  { title: 'Clinical Precision', desc: 'Our formulas are developed with molecular precision to target specific skin and lash concerns effectively.' },
                  { title: 'Sustainable Luxury', desc: 'Premium packaging designed to be as kind to the planet as it is beautiful on your vanity.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-beige border border-brand-mocha/5 flex items-center justify-center text-brand-mocha group-hover:bg-brand-mocha group-hover:text-white transition-all">
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 className="font-display text-xl mb-2 tracking-wide">{item.title}</h4>
                      <p className="text-sm text-brand-mocha-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80" className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="Product Formulation" />
                <img src="https://images.unsplash.com/photo-1596755094514-f87034a31217?auto=format&fit=crop&w=500&q=80" className="rounded-3xl h-80 w-full object-cover shadow-lg" alt="Luxury Packaging" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80" className="rounded-3xl h-80 w-full object-cover shadow-lg" alt="Clinical Testing" />
                <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=500&q=80" className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="Natural Ingredients" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
