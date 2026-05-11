import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';
import { ShoppingBag, Star, Filter, Grid, List as ListIcon, ChevronRight, Search as SearchIcon, X } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';
import { cn } from '@/src/lib/utils';

const CATEGORIES = [
  { id: 'all', label: 'All Collection' },
  { id: 'skincare', label: 'Skincare' },
  { id: 'lashes', label: 'Lashes' },
  { id: 'brows', label: 'Brows' },
  { id: 'kits', label: 'Beauty Kits' },
  { id: 'vouchers', label: 'Gift Vouchers' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-brand-nude min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0 border-b border-brand-mocha/10 pb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light mb-4 block">
              Boutique E-Shop
            </span>
            <h1 className="text-5xl md:text-7xl font-display mb-6">
              Shop The <span className="serif-italic">Collection</span>
            </h1>
            <p className="text-brand-mocha-light text-lg">
              Luxury essentials curated by Kristine. Professional-grade formulas and tools to maintain your studio-quality results at home.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
             <div className="relative w-full sm:w-72 group">
                <input 
                  type="text" 
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-brand-mocha/10 h-12 px-12 rounded-full text-[11px] font-bold tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all shadow-sm group-hover:border-brand-mocha/20"
                />
                <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-mocha/30 group-focus-within:text-brand-gold transition-colors" size={16} />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-mocha/20 hover:text-brand-mocha transition-colors p-1"
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
             </div>
             <div className="flex bg-white rounded-full p-1 border border-brand-mocha/5 shadow-sm">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-mocha text-white shadow-md"><Grid size={18} /></button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-brand-mocha/40 hover:text-brand-mocha transition-colors" aria-label="List view"><ListIcon size={18} /></button>
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-10">
            <div className="bg-white/50 p-6 rounded-[2rem] border border-brand-mocha/5">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-mocha mb-6 flex items-center">
                <Filter size={14} className="mr-2" /> Collections
              </h4>
              <ul className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "text-[10px] tracking-widest uppercase transition-all duration-300 w-full text-left py-3 px-5 rounded-xl flex items-center justify-between group",
                        activeCategory === cat.id 
                          ? "bg-brand-mocha text-white font-bold shadow-lg" 
                          : "text-brand-mocha-light hover:bg-white hover:text-brand-mocha hover:shadow-sm"
                      )}
                    >
                      {cat.label}
                      <ChevronRight size={12} className={cn("transition-transform duration-500", activeCategory === cat.id ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0")} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-brand-mocha text-white rounded-[2.5rem] relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <Star className="text-brand-gold" size={20} />
                  </div>
                  <h5 className="font-display text-2xl mb-2">Loyalty Rewards</h5>
                  <p className="text-[10px] opacity-60 leading-relaxed mb-8 font-sans tracking-wide">
                    Earn 5 points for every dollar spent. Redeem for exclusive studio treatments or product discounts.
                  </p>
                  <button className="text-[10px] font-bold tracking-widest uppercase border-b border-white/40 pb-1 hover:border-white transition-all">Join The Club</button>
               </div>
               <ShoppingBag className="absolute -bottom-8 -right-8 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-1000" size={180} />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group bg-white p-5 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-mocha/5"
                  >
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 bg-brand-nude">
                      <Link to={`/product/${product.id}`} className="block w-full h-full">
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </Link>
                      <div className="absolute inset-0 bg-brand-mocha/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                          className="bg-white text-brand-mocha px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-brand-gold hover:text-white pointer-events-auto"
                        >
                          <ShoppingBag size={14} />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="px-2">
                       <div className="flex items-center space-x-1 mb-2">
                         {[...Array(5)].map((_, i) => (
                           <Star 
                             key={i} 
                             size={10} 
                             fill={i < Math.floor(product.rating) ? "#c5a059" : "none"}
                             className={i < Math.floor(product.rating) ? "text-brand-gold" : "text-brand-mocha/10"} 
                           />
                         ))}
                         <span className="text-[10px] font-bold text-brand-mocha/30 uppercase tracking-widest ml-2">{product.reviews} reviews</span>
                       </div>
                       <Link to={`/product/${product.id}`}>
                         <h3 className="text-xl font-display mb-1 truncate hover:text-brand-gold transition-colors">{product.title}</h3>
                       </Link>
                       <p className="text-[10px] font-bold tracking-widest uppercase text-brand-mocha/40 mb-4">{product.category}</p>
                       
                       <div className="flex items-center justify-between pt-4 border-t border-brand-mocha/5 mt-auto">
                          <span className="text-2xl font-display font-medium text-brand-mocha">${product.price.toFixed(2)}</span>
                          <button 
                            onClick={() => addToCart(product)}
                            className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center text-brand-mocha hover:bg-brand-mocha hover:text-white transition-all duration-300"
                          >
                            <ShoppingBag size={18} />
                          </button>
                       </div>
                    </div>
                  </motion.div>
                ))}
             </div>

             {filteredProducts.length === 0 && (
               <div className="py-32 text-center bg-white/30 rounded-[3rem] border border-dashed border-brand-mocha/10">
                  <ShoppingBag size={64} className="mx-auto text-brand-mocha/10 mb-6" />
                  <h3 className="text-2xl font-display text-brand-mocha-light mb-2">No products found</h3>
                  <p className="text-sm text-brand-mocha/40 max-w-xs mx-auto mb-8 font-sans">We couldn't find any products matching your current filters or search query.</p>
                  <button 
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="luxury-button inline-flex items-center px-8"
                  >
                    Clear All Filters
                  </button>
               </div>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
