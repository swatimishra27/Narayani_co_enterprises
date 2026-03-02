import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Construction, Shield, Package, Search, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Products', icon: Package },
  { id: 'building', label: 'Building Materials', icon: Construction },
  { id: 'safety', label: 'Safety Materials', icon: Shield },
  { id: 'general', label: 'General Materials', icon: Package },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-transition">
      {/* 1. Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920"
            alt="Our Inventory"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-light text-white leading-tight mb-0 drop-shadow-xl tracking-tighter"
            >
              Our <span className="serif italic text-primary">Products</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Controls */}
          <div className="mb-16 space-y-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative w-full lg:w-[450px] group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Search our industrial catalog..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-8 py-4 rounded-full bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all shadow-sm text-[13px] font-medium placeholder:text-slate-400"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 bg-white/50 p-1.5 rounded-full border border-slate-200 backdrop-blur-sm">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                        activeCategory === cat.id
                          ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className={`w-3 h-3 ${activeCategory === cat.id ? 'text-primary' : 'text-slate-400'}`} />
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="flex items-center justify-between px-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="w-8 h-px bg-slate-200" />
                Showing {filteredProducts.length} Results
              </div>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-[9px] font-bold text-primary uppercase tracking-widest hover:underline"
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-primary text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-base font-bold text-slate-900 mb-2 tracking-tight">{product.name}</h4>
                    <p className="text-xs text-slate-500 mb-6 line-clamp-2 leading-relaxed font-medium">{product.description}</p>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 text-primary text-[9px] font-bold uppercase tracking-[0.2em] hover:gap-3 transition-all group/btn"
                    >
                      Inquire Now
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-32">
              <div className="text-slate-400 mb-6 font-medium">No products found matching your search.</div>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                className="text-primary font-bold hover:underline uppercase text-[10px] tracking-widest"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
