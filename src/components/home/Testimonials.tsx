import { motion } from 'motion/react';
import { TESTIMONIALS } from '@/src/constants';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-nude overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light mb-4 block">
            Client Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-display">
            The <span className="serif-italic">Glow up</span> Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col items-center text-center relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-gold/10" size={60} />
              <div className="mb-6 relative">
                <div className="w-20 h-20 rounded-full border-2 border-brand-beige p-1">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-gold text-white p-1 rounded-full text-[10px]">
                  <Star fill="currentColor" size={12} />
                </div>
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < testimonial.rating ? '#c5a059' : 'none'}
                    className={i < testimonial.rating ? 'text-brand-gold' : 'text-brand-mocha/20'}
                  />
                ))}
              </div>
              <p className="text-brand-mocha-light font-serif italic text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-display font-medium text-lg uppercase tracking-wider">{testimonial.name}</h4>
                <p className="text-xs font-bold tracking-[0.2em] text-brand-mocha/40 uppercase mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
