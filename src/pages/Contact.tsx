import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, MessageSquare, ChevronRight } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-display mb-8">
            Connect <br />
            <span className="serif-italic">With Us</span>
          </h1>
          <p className="text-brand-mocha-light text-lg max-w-2xl mx-auto">
            Whether you have a question about our services or want to book a private consultation, we're here to help you begin your beauty journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-16">
            <div className="space-y-10">
              <h3 className="text-3xl font-display uppercase tracking-widest">The Studio</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-mocha/5 flex items-center justify-center text-brand-mocha group-hover:bg-brand-mocha group-hover:text-white transition-all scale-100 group-hover:scale-110">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-mocha/40 mb-1">Our Location</p>
                    <p className="text-brand-mocha font-display text-xl leading-relaxed">
                      123 Luxury Avenue, Suite 101<br />Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-mocha/5 flex items-center justify-center text-brand-mocha group-hover:bg-brand-mocha group-hover:text-white transition-all scale-100 group-hover:scale-110">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-mocha/40 mb-1">Call Us</p>
                    <p className="text-brand-mocha font-display text-xl leading-relaxed">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-mocha/5 flex items-center justify-center text-brand-mocha group-hover:bg-brand-mocha group-hover:text-white transition-all scale-100 group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-mocha/40 mb-1">Email Us</p>
                    <p className="text-brand-mocha font-display text-xl leading-relaxed">
                      hello@kristinebeauty.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 p-10 bg-brand-beige rounded-[2.5rem] border border-brand-mocha/5">
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-mocha">Business Hours</h4>
              <div className="space-y-4">
                {[
                  { day: 'Mon - Fri', hours: '10:00 AM - 08:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 06:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="font-bold text-brand-mocha tracking-widest uppercase text-[10px]">{item.day}</span>
                    <span className="text-brand-mocha-light">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-6">
              {[Instagram, Facebook, MessageSquare].map((Icon, idx) => (
                <a key={idx} href="#" className="w-14 h-14 rounded-full border border-brand-mocha/10 flex items-center justify-center text-brand-mocha hover:bg-brand-mocha hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-brand-mocha/5">
            <h3 className="text-3xl font-display mb-10 text-center">Send an <span className="serif-italic">Inquiry</span></h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">First Name</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-brand-mocha/10 focus:ring-2 focus:ring-brand-gold outline-none transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">Last Name</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-brand-mocha/10 focus:ring-2 focus:ring-brand-gold outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">Email Address</label>
                <input type="email" className="w-full p-4 rounded-xl border border-brand-mocha/10 focus:ring-2 focus:ring-brand-gold outline-none transition-all" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">Subject</label>
                <select className="w-full p-4 rounded-xl border border-brand-mocha/10 focus:ring-2 focus:ring-brand-gold outline-none transition-all bg-white appearance-none">
                  <option>General Inquiry</option>
                  <option>Bridal Consultation</option>
                  <option>Service Question</option>
                  <option>Special Occasions</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">Your Message</label>
                <textarea rows={5} className="w-full p-4 rounded-xl border border-brand-mocha/10 focus:ring-2 focus:ring-brand-gold outline-none transition-all resize-none" placeholder="Tell us how we can help you..."></textarea>
              </div>
              <button type="submit" className="luxury-button w-full flex items-center justify-center group py-5">
                <span>Send Message</span>
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Mockup */}
      <div className="mt-32 h-[500px] bg-brand-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-118.4003,34.0736,13,0/1200x500?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZzeXgifQ.ocv9R_m6ZzYy6_WjY9F63w')] bg-cover bg-center grayscale opacity-60" />
        <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply" />
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-brand-mocha text-white p-6 rounded-2xl shadow-2xl relative">
            <p className="font-display text-lg uppercase tracking-widest">We are here</p>
            <p className="text-[10px] font-bold tracking-[0.1em] opacity-60">123 LUXURY AVE, BEVERLY HILLS</p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-mocha rotate-45" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
