import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Truck, Award, ShieldCheck, Banknote, Clock, ThumbsUp, Construction, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '10+' },
  { icon: Users, label: 'Happy Clients', value: '500+' },
  { icon: Truck, label: 'Deliveries Made', value: '10k+' },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Quality Products',
    description: 'We source only the highest grade materials that meet international safety and durability standards.'
  },
  {
    icon: Banknote,
    title: 'Competitive Pricing',
    description: 'Direct sourcing and efficient logistics allow us to offer the best market rates for bulk supplies.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We understand project timelines. Our robust delivery network ensures your materials arrive when needed.'
  },
  {
    icon: ThumbsUp,
    title: 'Trusted Supplier',
    description: 'Years of experience serving major builders, contractors, and industrial clients across India.'
  }
];

export default function About() {
  return (
    <div className="page-transition">
      {/* 1. Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920"
            alt="Industrial Legacy"
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
              About <span className="serif italic text-primary">Us</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section (80% Rule / Small Text) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary/30" />
                Company Profile
              </h2>
              <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-8 leading-tight tracking-tight">
                A Decade of <span className="serif italic text-primary">Reliability</span> <br /> in Every Supply
              </h3>
              <p className="text-sm md:text-base text-slate-500 mb-10 leading-relaxed font-medium max-w-lg">
                Narayani Enterprises & Co is a premier supplier of construction, safety, and general materials in India. We specialize in providing high-grade materials that meet the rigorous demands of modern infrastructure and industrial projects.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                {[
                  'Uncompromising focus on quality',
                  'Reliable supply chain network',
                  'Competitive industrial pricing',
                  'Certified safety equipment'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-slate-700 font-bold text-[11px] uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-100">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-light text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                  alt="Industrial Work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-[2rem] -z-10" />
              <div className="absolute -top-8 -right-8 w-40 h-40 border border-primary/10 rounded-[2rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Refined Cards) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">The Preferred Partner for Industrial Excellence</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 tracking-tight">{reason.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA Section (Fixed BG) */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920")',
          }}
        />
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[1px] z-10" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
              Partner with <span className="italic serif text-primary">Excellence</span>
            </h2>
            <p className="text-slate-300/80 text-sm md:text-base font-medium mb-10 leading-relaxed max-w-xl mx-auto">
              Ready to elevate your project with high-quality materials? Our team is standing by to provide expert guidance and competitive quotes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                to="/contact" 
                className="relative inline-flex items-center justify-center gap-2.5 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-amber-500 transition-all group shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Contact Our Experts</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
