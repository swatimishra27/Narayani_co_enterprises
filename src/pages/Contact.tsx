import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="page-transition">
      {/* 1. Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516387933901-826145d7d81e?auto=format&fit=crop&q=80&w=1920"
            alt="Contact Us"
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
              Contact <span className="serif italic text-primary">Us</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-10">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-10 tracking-tight">Narayani Co.</h4>
                
                <div className="space-y-8">
                  {[
                    { icon: Phone, text: '+91 98765 43210', label: 'Call us' },
                    { icon: Mail, text: 'sales@narayanico.com', label: 'Email us' },
                    { icon: MapPin, text: 'Industrial Area, Mumbai, India', label: 'Visit us' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-slate-900 font-bold text-sm">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-10 border-t border-slate-200">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4.5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity shadow-xl shadow-green-500/10"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold tracking-tight">Business Hours</h4>
                </div>
                <div className="space-y-4 text-slate-400 text-sm font-medium">
                  <div className="flex justify-between items-center">
                    <span>Mon - Fri</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-primary font-bold uppercase text-[10px] tracking-widest">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-6 py-4.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Subject</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none text-sm font-medium">
                      <option>Material Inquiry</option>
                      <option>Bulk Order Quote</option>
                      <option>Partnership Request</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-6 py-4.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-sm font-medium"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-primary transition-all w-full md:w-auto shadow-2xl shadow-slate-900/10 hover:scale-105 active:scale-95"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
