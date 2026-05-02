import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          <div className="space-y-8">
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Narayani Enterprises & Co Logo"
                className="h-10 w-auto sm:h-12 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium text-[13px]">
              Reliable supplier and trading partner for construction materials, building materials, industrial supplies, and safety equipment. Established in 2026.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/narayani-enterprises-co/' }
              ].map(({Icon, href}, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== '#' ? "_blank" : undefined}
                  rel={href !== '#' ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Products', href: '/products' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Contact</h4>
            <ul className="space-y-6">
              {[
                { icon: Phone, text: '+91 9209157335 / 9990161075', label: 'Call us' },
                { icon: Mail, text: 'reachus@narayanibuildmart.com', label: 'Email us' },
                { icon: MapPin, text: 'Happy City, Talegaon Dabhade, Pune – 410506', label: 'Visit us' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{item.label}</div>
                    <div className="text-sm text-slate-300 font-medium">{item.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-8 font-medium">Stay updated with our latest inventory and industrial insights.</p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                />
              </div>
              <button className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-amber-500 transition-all shadow-xl shadow-primary/10">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Narayani Co. <span className="mx-2 text-slate-800">|</span> All rights reserved.
          </p>
          <div className="flex gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
