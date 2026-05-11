import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight, ChevronLeft, CreditCard, ShieldCheck, Truck, ArrowLeft, Trash2, Plus, Minus, CheckCircle } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Checkout() {
  const { cart, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    payment: 'card'
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  if (cart.length === 0 && step < 3) {
    return (
      <div className="pt-40 pb-20 text-center px-6">
        <div className="max-w-md mx-auto space-y-8">
          <div className="w-24 h-24 bg-brand-beige rounded-full flex items-center justify-center mx-auto text-brand-mocha/20">
            <ShoppingBag size={40} />
          </div>
          <h2 className="text-3xl font-display">Your bag is empty</h2>
          <p className="text-brand-mocha-light">Treat yourself to our premium beauty collection and start your glow-up today.</p>
          <Link to="/shop" className="luxury-button inline-flex items-center space-x-3 uppercase tracking-widest text-xs">
            <ArrowLeft size={16} />
            <span>Go To Shop</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-brand-nude min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Simple Progress Bar */}
        <div className="flex items-center justify-center space-x-4 mb-20">
          {[1, 2, 3].map((s) => (
             <React.Fragment key={s}>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest transition-all",
                  step >= s ? "bg-brand-mocha text-white shadow-lg" : "bg-white text-brand-mocha/20"
                )}>
                  {s === 1 ? 'BAG' : s === 2 ? 'PAY' : 'DONE'}
                </div>
                {s < 3 && <div className={cn("w-12 h-[1px]", step > s ? "bg-brand-mocha" : "bg-brand-mocha/10")} />}
             </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="cart"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-display mb-8">Shopping Bag <span className="text-brand-mocha-light serif-italic">({cart.length} items)</span></h3>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-white p-6 rounded-[2rem] border border-brand-mocha/5 flex items-center gap-6 group hover:shadow-lg transition-all duration-500">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-brand-nude shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                           <div className="flex justify-between items-start mb-2 text-brand-mocha">
                              <h4 className="font-display text-xl">{item.title}</h4>
                              <span className="font-display font-medium text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                           </div>
                           <p className="text-[10px] font-bold tracking-widest uppercase text-brand-mocha/40 mb-4">{item.category}</p>
                           <div className="flex items-center justify-between">
                              <div className="flex items-center bg-brand-beige rounded-full p-1 border border-brand-mocha/5">
                                 <button 
                                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                   className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors"
                                 >
                                   <Minus size={14} />
                                 </button>
                                 <span className="w-10 text-center text-xs font-bold">{item.quantity}</span>
                                 <button 
                                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                   className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors"
                                 >
                                   <Plus size={14} />
                                 </button>
                              </div>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-brand-mocha/30 hover:text-red-400 transition-colors"
                              >
                                <Trash2 size={18} />
                              </button>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="checkout"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-12"
                >
                  <h3 className="text-3xl font-display mb-8">Shipping & <span className="serif-italic">Payment</span></h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Full Name</label>
                       <input 
                         type="text" 
                         className="w-full p-4 rounded-xl border border-brand-mocha/10 focus:ring-2 focus:ring-brand-gold outline-none" 
                         placeholder="Jane Doe"
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                       />
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Email Address</label>
                       <input 
                         type="email" 
                         className="w-full p-4 rounded-xl border border-brand-mocha/10 focus:ring-2 focus:ring-brand-gold outline-none" 
                         placeholder="jane@example.com"
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                       />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                       <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Shipping Address</label>
                       <textarea 
                         rows={2}
                         className="w-full p-4 rounded-xl border border-brand-mocha/10 focus:ring-2 focus:ring-brand-gold outline-none resize-none" 
                         placeholder="Street, Barangay, City"
                         value={formData.address}
                         onChange={(e) => setFormData({...formData, address: e.target.value})}
                       />
                    </div>
                  </div>

                  <div>
                     <h4 className="text-[10px] font-bold tracking-widest uppercase text-brand-mocha mb-6">Payment Method</h4>
                     <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => setFormData({...formData, payment: 'card'})}
                          className={cn(
                            "p-6 rounded-2xl border text-left flex items-center justify-between group transition-all",
                            formData.payment === 'card' ? "border-brand-mocha bg-brand-mocha text-white shadow-lg" : "border-brand-mocha/10 hover:border-brand-gold/50"
                          )}
                        >
                           <div className="flex items-center space-x-3">
                              <CreditCard size={20} />
                              <span className="text-xs font-bold tracking-widest uppercase">Credit Card</span>
                           </div>
                           {formData.payment === 'card' && <CheckCircle size={18} />}
                        </button>
                        <button 
                          onClick={() => setFormData({...formData, payment: 'cod'})}
                          className={cn(
                            "p-6 rounded-2xl border text-left flex items-center justify-between group transition-all",
                            formData.payment === 'cod' ? "border-brand-mocha bg-brand-mocha text-white shadow-lg" : "border-brand-mocha/10 hover:border-brand-gold/50"
                          )}
                        >
                           <div className="flex items-center space-x-3">
                              <Truck size={20} />
                              <span className="text-xs font-bold tracking-widest uppercase">COD</span>
                           </div>
                           {formData.payment === 'cod' && <CheckCircle size={18} />}
                        </button>
                     </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 1, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 bg-white rounded-[3rem] shadow-2xl border border-brand-mocha/5"
                >
                  <div className="w-24 h-24 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                     <CheckCircle size={48} />
                  </div>
                  <h3 className="text-4xl font-display text-brand-mocha mb-4 uppercase tracking-[0.1em]">Order Placed!</h3>
                  <p className="text-brand-mocha-light max-w-sm mx-auto mb-10">
                    Your luxury essentials are being prepared. You'll receive a confirmation email at <span className="font-bold text-brand-mocha">{formData.email}</span> shortly.
                  </p>
                  <div className="inline-flex flex-col space-y-4">
                     <Link to="/shop" className="luxury-button uppercase tracking-widest text-[10px]">Continue Shopping</Link>
                     <p className="text-[10px] font-bold tracking-[0.2em] text-brand-mocha/30 uppercase cursor-pointer hover:text-brand-mocha">View Order Details</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          {step < 3 && (
            <div className="lg:col-span-4 sticky top-32">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-brand-mocha/5 space-y-8">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-mocha pb-6 border-b border-brand-mocha/5">Order Summary</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-mocha-light uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                    <span className="font-display text-lg text-brand-mocha">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-mocha-light uppercase tracking-widest text-[10px] font-bold">Shipping</span>
                    <span className="font-display text-lg text-brand-gold">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-mocha-light uppercase tracking-widest text-[10px] font-bold">Lux Tax</span>
                    <span className="font-display text-lg text-brand-mocha">${(totalPrice * 0.05).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-brand-mocha/10 flex justify-between items-end">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-brand-mocha/40">Total Amount</span>
                      <span className="text-3xl font-display font-medium text-brand-mocha">${(totalPrice * 1.05).toFixed(2)}</span>
                   </div>
                </div>

                <div className="space-y-4 pt-6">
                   <button 
                     onClick={step === 1 ? nextStep : nextStep}
                     className="luxury-button w-full flex items-center justify-center group py-5"
                   >
                     <span>{step === 1 ? 'Go To Checkout' : 'Finalize Payment'}</span>
                     <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                   </button>
                   {step === 2 && (
                     <button 
                       onClick={prevStep}
                       className="w-full text-[10px] font-bold tracking-widest uppercase text-brand-mocha/40 hover:text-brand-mocha transition-colors"
                     >
                       Edit Shopping Bag
                     </button>
                   )}
                </div>

                <div className="pt-6 flex items-center justify-center space-x-6 text-brand-mocha-light opacity-60">
                   <ShieldCheck size={20} />
                   <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Secure Luxury Payments</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
