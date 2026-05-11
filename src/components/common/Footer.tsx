import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-beige pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Studio Info */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl font-display font-bold tracking-widest text-brand-mocha uppercase">
              Kristine
            </span>
            <span className="text-xs font-sans tracking-[0.3em] text-brand-mocha-light uppercase -mt-1">
              Beauty Studio
            </span>
          </Link>
          <p className="text-sm font-sans text-brand-mocha-light leading-relaxed max-w-xs">
            Enhancing your natural beauty with luxury care and precision. Our multi-certified specialists provide a premium experience in our boutique studio.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-brand-mocha/20 flex items-center justify-center text-brand-mocha hover:bg-brand-mocha hover:text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-mocha/20 flex items-center justify-center text-brand-mocha hover:bg-brand-mocha hover:text-white transition-all duration-300">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-brand-mocha mb-8">Shop Selection</h4>
          <ul className="space-y-4">
            {['Home', 'Shop', 'Gallery', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-brand-mocha-light hover:text-brand-gold transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-brand-mocha mb-8">Popular Collections</h4>
          <ul className="space-y-4">
            {['Luxury Lash Kits', 'Studio Skincare', 'Brow Sculptors', 'Gift Vouchers', 'Nail Art Kits'].map((item) => (
              <li key={item}>
                <Link to="/shop" className="text-sm text-brand-mocha-light hover:text-brand-gold transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-brand-mocha mb-8">Get in Touch</h4>
          <div className="flex items-start space-x-3 text-sm text-brand-mocha-light">
            <MapPin size={18} className="mt-0.5 text-brand-gold" />
            <span>123 Luxury Avenue, Suite 101<br />Beverly Hills, CA 90210</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-brand-mocha-light">
            <Phone size={18} className="text-brand-gold" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-brand-mocha-light">
            <Mail size={18} className="text-brand-gold" />
            <span>hello@kristinebeauty.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-top border-brand-mocha/10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-brand-mocha-light">
        <p>© 2024 KRISTINE BEAUTY STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-brand-mocha">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-brand-mocha">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
