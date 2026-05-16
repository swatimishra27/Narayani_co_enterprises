import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Truck, Award, ShieldCheck, Banknote, Clock, ThumbsUp, Construction, ArrowRight, HardHat, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Award, label: 'Quality Assurance', value: '100%' },
  { icon: Users, label: 'Customer Satisfaction', value: 'Prioritized' },
  { icon: Truck, label: 'Deliveries Made', value: 'On-Time' },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Reliable Sourcing Network',
    description: 'We work with trusted manufacturers and suppliers to ensure consistent availability of quality materials.'
  },
  {
    icon: Banknote,
    title: 'Competitive Pricing',
    description: 'Our strong supplier network enables us to provide cost-effective material supply solutions while maintaining product quality.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We understand the importance of project timelines and strive to ensure timely delivery of materials to support uninterrupted project progress.'
  },
  {
    icon: ThumbsUp,
    title: 'Wide Product Portfolio',
    description: 'From construction materials to safety equipment, we offer a diverse range of products to meet project requirements.'
  }
];

export default function About() {
  return (
    <div className="page-transition">
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
              About <span className="serif italic text-primary">Us</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section (80% Rule / Small Text) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                About Narayani <br />
                <span className="serif italic text-primary">Enterprises and Co</span>
              </h3>
              <p className="text-sm md:text-base text-slate-500 mb-6 leading-relaxed font-medium max-w-lg">
                Narayani Enterprises and Co is a reliable supplier and trading partner for construction materials, building materials, industrial supplies, and safety equipment. Established in 2026 and based in Pune, Maharashtra, India, the company supports construction, infrastructure, and industrial projects by ensuring consistent availability of quality materials.
              </p>
              <p className="text-sm md:text-base text-slate-500 mb-10 leading-relaxed font-medium max-w-lg">
                Working with trusted manufacturers and suppliers, Narayani Enterprises and Co ensures customers receive products that meet industry standards — serving contractors, builders, infrastructure developers, and industrial clients under one trusted supply network.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                {[
                  'Reliability',
                  'Quality Sourcing',
                  'Timely Supply',
                  'Customer Satisfaction'
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

      {/* Our Vision & Mission */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-4">
              Our Vision & <span className="serif italic text-primary">Mission</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              Building trust through reliable supply, quality materials, and lasting partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl shadow-primary/20 flex flex-col"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Our Vision</h3>
              <p className="text-sm font-medium leading-relaxed mb-10 text-white flex-grow">
                To become a trusted supply and distribution partner for construction materials, building materials, industrial supplies, and safety equipment — supporting infrastructure and development projects with reliability and quality.
              </p>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                  <h4 className="text-sm font-bold tracking-wider mb-2">Growth</h4>
                  <p className="text-xs text-white/90 font-medium">Trusted partner for infrastructure and development</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                  <h4 className="text-sm font-bold tracking-wider mb-2">Infrastructure</h4>
                  <p className="text-xs text-white/90 font-medium">Supporting construction and industrial projects</p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl shadow-slate-900/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Our Mission</h3>
              
              <div className="space-y-8 relative before:absolute before:inset-y-6 before:left-[19px] before:w-0.5 before:bg-white/10">
                {[
                  { title: 'Reliable Supply', desc: 'Dependable and timely supply of essential construction and industrial materials' },
                  { title: 'Long-Term Relationships', desc: 'Building lasting partnerships with contractors, builders, and project developers' },
                  { title: 'Industry Support', desc: 'Wide portfolio of materials through a trusted supplier network' },
                  { title: 'Professionalism & Excellence', desc: 'Transparency and service excellence in every engagement' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 relative z-10 hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-slate-700 border-4 border-slate-800 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <div className="pt-2">
                      <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-6">
                Our Core <span className="serif italic text-primary">Values</span>
              </h2>
              <p className="text-sm md:text-base text-slate-500 font-medium mb-12 max-w-lg">
                At <strong className="text-slate-900">Narayani Enterprises and Co</strong>, our operations are guided by strong business values that help us deliver dependable supply solutions to our customers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  {
                    icon: HeartHandshake,
                    title: 'Integrity',
                    desc: 'We conduct our business with honesty, transparency, and ethical practices, ensuring trust and long-term relationships with our clients and partners.'
                  },
                  {
                    icon: Users,
                    title: 'Customer Commitment',
                    desc: 'We prioritize customer requirements and strive to provide timely and dependable supply solutions that support project success.'
                  },
                  {
                    icon: Clock,
                    title: 'Reliability',
                    desc: 'Consistency in product availability, dependable sourcing, and timely delivery are the foundation of our supply operations.'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Quality Assurance',
                    desc: 'We work with reliable manufacturers and suppliers to ensure that the materials we supply meet industry standards and project requirements.'
                  },
                  {
                    icon: HardHat,
                    title: 'Safety Awareness',
                    desc: 'We support safe working environments by supplying quality safety equipment essential for construction and industrial workplaces.'
                  }
                ].map((value, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        <value.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight">{value.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://plus.unsplash.com/premium_photo-1661302828763-4ec9b91d9ce3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Warehouse Materials" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Refined Cards) */}
      <section className="py-24 bg-slate-50">
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

      {/* Industries We Support Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4">Our Focus Areas</h2>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">Industries We <span className="serif italic text-primary">Support</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Construction Companies & Infrastructure Contractors' },
              { title: 'Real Estate Developers & Industrial Projects' },
              { title: 'Government and Institutional Projects' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-primary transition-colors">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-relaxed tracking-tight">{industry.title}</h4>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-10 border-t border-slate-100 text-center"
          >
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              Managing Director: <span className="text-slate-900">Ramesh Kumar Mishra</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-2">Pune, Maharashtra, India</p>
          </motion.div>
        </div>
      </section>

      {/* Industry Brands Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4">Clients & Projects We Support</h2>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-6">Industry <span className="serif italic text-primary">Brands</span></h3>
            <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
              Narayani Enterprises and Co supports a wide range of construction and infrastructure projects by supplying essential materials and safety equipment required by contractors, developers, and industrial clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { name: 'UltraTech Cement', class: 'text-2xl font-black text-[#ffcc00] tracking-tighter mix-blend-multiply drop-shadow-sm' },
              { name: 'ACC LIMITED', class: 'text-3xl font-black text-red-600 italic tracking-tighter' },
              { name: 'Ambuja Cement', class: 'text-2xl font-bold text-[#ed1b24]' },
              { name: 'TATA STEEL', class: 'text-3xl font-black text-[#1d306b] tracking-widest' },
              { name: 'JSW', class: 'text-4xl font-black text-[#00a99d] tracking-tighter' },
              { name: 'JINDAL STEEL', class: 'text-2xl font-black font-serif italic text-green-600' },
              { name: 'Kajaria', class: 'text-3xl font-black text-[#0f2e5a] tracking-tight' },
              { name: 'ASTRAL PIPES', class: 'text-2xl font-black text-[#0055a4] tracking-wider' }
            ].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white h-32 rounded-2xl border border-slate-100 flex items-center justify-center p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <span className={`${brand.class} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all text-center leading-none`}>
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
            <p className="text-xs text-slate-600 font-semibold flex items-center justify-center gap-3">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Supply of materials from leading industry brands available on request through our supplier network.
            </p>
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
