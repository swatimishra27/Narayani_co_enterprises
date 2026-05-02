import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { HardHat, Building2, ShieldCheck, Wrench, LayoutGrid, Search, X, ArrowRight, SlidersHorizontal } from 'lucide-react';

const categories = [
  { id: 'all',          label: 'All Products',  icon: LayoutGrid },
  { id: 'construction', label: 'Construction',   icon: HardHat },
  { id: 'building',     label: 'Building',       icon: Building2 },
  { id: 'safety',       label: 'Safety',         icon: ShieldCheck },
  { id: 'industrial',   label: 'Industrial',     icon: Wrench },
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
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-light text-white leading-tight mb-0 drop-shadow-xl tracking-tighter"
            >
              Our <span className="serif italic text-primary">Products</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Search & Filter ── */}
          <div className="mb-10 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">

            {/* Search row */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Search className="w-4 h-4 text-primary" />
              </div>
              <input
                type="text"
                placeholder="Search products by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm md:text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchQuery('')}
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors shrink-0"
                  >
                    <X className="w-3.5 h-3.5 text-slate-500" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Filter row */}
            <div className="flex items-center gap-3 px-6 py-4 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest shrink-0 mr-2">
                <SlidersHorizontal className="w-3 h-3" />
                Filter
              </div>
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.label}
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-primary rounded-xl -z-10"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Results strip */}
            <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-slate-900">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''} found
                {activeCategory !== 'all' && (
                  <span className="ml-2 text-primary">· {categories.find(c => c.id === activeCategory)?.label}</span>
                )}
              </p>
              {(searchQuery || activeCategory !== 'all') && (
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="text-[9px] font-bold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors flex items-center gap-1.5"
                >
                  <X className="w-3 h-3" /> Clear all
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
