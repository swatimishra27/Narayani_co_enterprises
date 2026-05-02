import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Construction, Shield, Package, Search, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Products', icon: Package },
  { id: 'construction', label: 'Construction', icon: Construction },
  { id: 'building', label: 'Building', icon: Construction },
  { id: 'safety', label: 'Safety', icon: Shield },
  { id: 'industrial', label: 'Industrial', icon: Package },
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
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920"
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
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row gap-10 items-end justify-between border-b border-slate-200 pb-10">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-2">
                  <Search className="w-3 h-3" />
                  Search Catalog
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search by name, category, or specification..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-base md:text-lg font-medium text-slate-900 placeholder:text-slate-300 focus:ring-0 outline-none transition-all tracking-tight"
                  />
                  <div className="absolute bottom-[-12px] left-0 w-full h-[1px] bg-slate-100 group-focus-within:bg-primary transition-colors duration-500" />
                  <div className="absolute bottom-[-12px] left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-700 ease-out" />
                </div>
              </div>

              <div className="w-full lg:w-auto">
                <div className="flex flex-wrap items-center gap-1">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`group relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ${
                          isActive 
                            ? 'text-slate-900' 
                            : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        <Icon className={`w-3 h-3 transition-colors duration-500 ${isActive ? 'text-primary' : 'text-slate-300 group-hover:text-slate-400'}`} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{cat.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-8 px-1">
              <div className="flex items-center gap-6">
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
                  <span className="w-6 h-px bg-slate-200" />
                  {filteredProducts.length} Products Found
                </div>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] hover:text-slate-900 transition-colors flex items-center gap-2"
                  >
                    Clear Search
                    <span className="text-slate-300">/</span>
                  </button>
                )}
              </div>
              
              <div className="hidden md:flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Sort by: <span className="text-slate-900 cursor-pointer hover:text-primary transition-colors">Default</span>
              </div>
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
