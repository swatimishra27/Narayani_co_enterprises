import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm' 
        : 'bg-white/50 backdrop-blur-md border-b border-white/10 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Narayani Enterprises & Co Logo"
              className="h-12 w-auto sm:h-14 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) => `
                  relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300
                  ${isActive 
                    ? 'text-primary' 
                    : 'text-slate-500 hover:text-slate-900'}
                `}
              >
                {item.label}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-px bg-primary"
                  />
                )}
              </NavLink>
            ))}
            <div className="pl-6">
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary transition-all duration-500 shadow-xl shadow-slate-900/10 hover:scale-105 active:scale-95"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-50 text-slate-900 hover:bg-slate-100 transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-6 py-4 text-base font-bold rounded-2xl transition-all
                    ${isActive 
                      ? 'bg-slate-50 text-primary' 
                      : 'text-slate-600 hover:bg-slate-50'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <div className={`w-1.5 h-1.5 rounded-full transition-all ${isActive ? 'bg-primary scale-100' : 'bg-transparent scale-0'}`} />
                      {item.label}
                    </>
                  )}
                </NavLink>
              ))}
              <div className="pt-6 px-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-primary text-white px-6 py-4 rounded-2xl text-base font-bold shadow-lg shadow-primary/20"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
