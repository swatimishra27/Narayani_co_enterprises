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
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
            alt="Contact Us"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30" />
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Narayani Enterprises and Co</h4>
                <p className="text-[10px] text-slate-500 mb-2 font-bold tracking-wider leading-relaxed">
                  <span className="text-primary uppercase">Managing Director:</span> Ramesh Kumar Mishra
                </p>
                <p className="text-[10px] text-slate-400 mb-10 font-bold uppercase tracking-widest leading-relaxed">
                  Nature of Business: Supplier & Distribution Partner of Construction Materials, Building Materials, Safety Equipment, and Industrial Supplies.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Phone, text: '+91 9209157335 / 9990161075', label: 'Contact Details' },
                    { icon: Mail, text: 'reachus@narayanibuildmart.com', label: 'Email Address' },
                    { icon: MapPin, text: 'Happy City, Talegaon Dabhade, Pune – 410506, Maharashtra, India', label: 'Business Address' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                        <div className="text-slate-900 font-bold text-sm tracking-tight group-hover:text-primary transition-colors pr-4">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-xs text-slate-500 font-medium italic">
                    Supporting construction and infrastructure projects PAN India.
                  </p>
                  <p className="text-[10px] flex justify-between tracking-wider font-bold uppercase text-slate-800 mt-6 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="flex flex-col gap-1">
                      <span className="text-[8px] text-slate-400">GST Number</span>
                      Available on request
                    </span>
                    <span className="flex flex-col gap-1 text-right">
                      <span className="text-[8px] text-slate-400">Udyam Registration</span>
                      Available on request
                    </span>
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <a
                    href="https://wa.me/919209157335"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-green-500/10 hover:scale-[1.02] active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Support
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-base font-bold tracking-tight">Business Hours</h4>
                </div>
                <div className="space-y-4 text-slate-400 text-xs font-medium relative z-10">
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
                    <span className="text-primary font-bold uppercase text-[9px] tracking-widest">Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/40"
              >
                <div className="mb-10">
                  <h3 className="text-2xl font-light text-slate-900 tracking-tight mb-4">Send us a <span className="serif italic text-primary">Message</span></h3>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-6">
                    We look forward to supporting your construction and infrastructure projects with reliable supply of construction materials, building materials, safety equipment, and industrial supplies.
                  </p>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">We usually respond within 24 hours.</p>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-slate-300"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-slate-300"
                        placeholder="rahul@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Subject of Inquiry</label>
                    <div className="relative group">
                      <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none text-sm font-medium text-slate-600 cursor-pointer">
                        <option>Material Inquiry</option>
                        <option>Bulk Order Quote</option>
                        <option>Partnership Request</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Your Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none text-sm font-medium placeholder:text-slate-300"
                      placeholder="Please describe your requirements in detail..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-primary transition-all group shadow-xl shadow-slate-900/10 hover:scale-105 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10">Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
