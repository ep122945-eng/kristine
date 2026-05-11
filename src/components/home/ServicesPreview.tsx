import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';

export default function ServicesPreview() {
  const { addToCart } = useCart();

  return (
    <section className="section-padding bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light mb-4 block">
              The Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-display">
              Elevate Your <br />
              <span className="serif-italic">Daily Ritual</span>
            </h2>
          </div>
          <Link to="/shop" className="text-xs font-bold tracking-widest uppercase text-brand-mocha flex items-center group border-b border-brand-mocha/20 pb-2">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-4 rounded-3xl border border-brand-mocha/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/5] rounded-2xl mb-6 bg-brand-nude">
                <Link to={`/product/${product.id}`} className="block w-full h-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="absolute top-4 right-4 flex flex-col space-y-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <Link 
                    to={`/product/${product.id}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-mocha hover:bg-brand-mocha hover:text-white transition-colors shadow-lg"
                  >
                    <Eye size={18} />
                  </Link>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 bg-brand-gold text-white rounded-full flex items-center justify-center hover:bg-brand-mocha transition-colors shadow-lg"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
                {product.stock < 10 && (
                   <span className="absolute top-4 left-4 bg-brand-mocha text-white text-[8px] font-bold tracking-widest uppercase px-2 py-1 rounded-full">
                     Low Stock
                   </span>
                )}
              </div>
              
              <div className="px-2">
                <div className="flex items-center space-x-1 mb-2">
                  <Star size={10} fill="#c5a059" className="text-brand-gold" />
                  <span className="text-[10px] font-bold text-brand-mocha/40 uppercase tracking-widest">{product.rating} ({product.reviews})</span>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-base font-display mb-1 group-hover:text-brand-gold transition-colors truncate">
                    {product.title}
                  </h3>
                </Link>
                <p className="text-[10px] font-bold tracking-widest uppercase text-brand-mocha/30 mb-3">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-display font-medium text-brand-mocha">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="text-[9px] font-bold tracking-widest uppercase text-brand-gold hover:text-brand-mocha transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
