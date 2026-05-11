import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '@/src/constants';
import { useCart } from '@/src/context/CartContext';
import { 
  ShoppingBag, 
  Star, 
  ArrowLeft, 
  ChevronRight, 
  Minus, 
  Plus, 
  ShieldCheck, 
  Truck, 
  RefreshCw,
  Heart,
  Share2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen">
        <h2 className="text-3xl font-display mb-6">Product Not Found</h2>
        <Link to="/shop" className="text-brand-gold font-bold tracking-widest uppercase text-xs border-b border-brand-gold pb-1">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Optional: Show success state or redirect
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-nude"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] mb-12 text-brand-mocha/40 font-bold">
          <Link to="/" className="hover:text-brand-mocha transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-brand-mocha transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-brand-mocha">{product.category}</span>
          <ChevronRight size={10} />
          <span className="text-brand-mocha/60 truncate max-w-[150px]">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              className="aspect-square rounded-[3rem] overflow-hidden bg-white border border-brand-mocha/5 shadow-2xl relative group"
              layoutId={`product-image-${product.id}`}
            >
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={cn(
                  "absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl",
                  isLiked ? "bg-brand-pink text-brand-mocha" : "bg-white text-brand-mocha hover:bg-brand-pink"
                )}
              >
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
              </button>
            </motion.div>

            {/* Thumbnails (Simulated) */}
            <div className="grid grid-cols-4 gap-4">
              {[product.image, product.image, product.image, product.image].map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    "aspect-square rounded-2xl overflow-hidden bg-white border transition-all duration-300",
                    selectedImage === i ? "border-brand-mocha ring-2 ring-brand-mocha/10" : "border-brand-mocha/10 opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light mb-4 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight">
                {product.title}
              </h1>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < Math.floor(product.rating) ? "#c5a059" : "none"}
                      className={i < Math.floor(product.rating) ? "text-brand-gold" : "text-brand-mocha/10"} 
                    />
                  ))}
                  <span className="text-[10px] font-bold text-brand-mocha/40 uppercase tracking-widest ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="h-4 w-px bg-brand-mocha/10"></div>
                <div className="flex items-center text-[10px] font-bold text-green-600 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-green-600 mr-2"></span>
                  In Stock
                </div>
              </div>

              <div className="text-4xl font-display text-brand-mocha mb-8">
                ${product.price.toFixed(2)}
              </div>

              <p className="text-brand-mocha-light leading-relaxed mb-10 text-lg">
                {product.description} Professional-grade quality that ensures long-lasting results. Specially formulated to be gentle on sensitive areas while delivering maximum performance.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-6 pt-8 border-t border-brand-mocha/10">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center bg-white border border-brand-mocha/10 p-1 rounded-full w-full sm:w-auto">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-brand-mocha hover:bg-brand-nude transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-bold text-brand-mocha font-display text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-brand-mocha hover:bg-brand-nude transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-brand-mocha text-white h-14 rounded-full font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center space-x-3 hover:bg-brand-gold-light hover:text-brand-mocha transition-all duration-500 shadow-xl"
                >
                  <ShoppingBag size={18} />
                  <span>Add To Shopping Bag</span>
                </button>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-4 pt-4">
                <button className="text-[10px] font-bold tracking-widest uppercase flex items-center text-brand-mocha/40 hover:text-brand-mocha transition-colors group">
                  <Share2 size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Share Product
                </button>
                <div className="h-3 w-px bg-brand-mocha/10"></div>
                <button className="text-[10px] font-bold tracking-widest uppercase flex items-center text-brand-mocha/40 hover:text-brand-mocha transition-colors group">
                  <ShieldCheck size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Size Guide
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 bg-white/50 p-8 rounded-[2rem] border border-brand-mocha/5">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-2">
                  <Truck size={20} />
                </div>
                <h5 className="text-[10px] font-bold tracking-widest uppercase">Safe Shipping</h5>
                <p className="text-[10px] opacity-60">Delivered within 3-5 days</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-2">
                  <ShieldCheck size={20} />
                </div>
                <h5 className="text-[10px] font-bold tracking-widest uppercase">100% Genuine</h5>
                <p className="text-[10px] opacity-60">Direct from Kristine Studio</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-2">
                  <RefreshCw size={20} />
                </div>
                <h5 className="text-[10px] font-bold tracking-widest uppercase">Easy Returns</h5>
                <p className="text-[10px] opacity-60">14-day exchange policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products (Simulated) */}
        <div className="mt-32 pt-20 border-t border-brand-mocha/10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand-mocha-light mb-4 block">Recommended</span>
              <h2 className="text-4xl font-display">You May Also <span className="serif-italic">Like</span></h2>
            </div>
            <Link to="/shop" className="text-[10px] font-bold tracking-widest uppercase border-b border-brand-mojo/20 pb-1 hover:text-brand-mojo hover:border-brand-mojo transition-all">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-white border border-brand-mocha/5">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-lg font-display mb-1">{item.title}</h3>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-40 mb-2">{item.category}</p>
                <p className="text-xl font-display text-brand-mocha">${item.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
