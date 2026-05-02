import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, ShieldCheck, Construction, Users, Truck, Package,
  MapPin, Clock, PhoneCall, FileText, Building2, Factory, HardHat, Landmark,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="page-transition">

      {/* ── 1. Hero ── */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920"
            alt="Construction Infrastructure"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
                <Construction className="w-3 h-3" />
                EST. SUPPLY PARTNER
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-light text-white leading-[1.2] mb-6 drop-shadow-xl tracking-tight"
              >
                Reliable Supply <span className="serif italic text-primary">Partner</span> for Construction, Building Materials & Safety Equipment
              </motion.h1>
              <p className="text-sm md:text-base text-slate-300 mb-10 leading-relaxed max-w-md font-medium">
                Delivering dependable supply solutions for construction, infrastructure, and industrial projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="relative inline-flex items-center justify-center gap-2.5 bg-primary text-white px-7 py-3 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-amber-500 transition-all group shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">Explore Inventory</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/5 backdrop-blur-xl text-white border border-white/10 px-7 py-3 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Stats Strip ── */}
      <section className="bg-slate-900 py-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { icon: Package,     value: '20+',       label: 'Product Categories' },
              { icon: MapPin,      value: 'Pune, MH',  label: 'Headquarters' },
              { icon: Truck,       value: 'PAN India', label: 'Supply Reach' },
              { icon: Clock,       value: '24 hr',     label: 'Response Time' },
            ].map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 md:px-10 first:md:pl-0 last:md:pr-0"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white tracking-tight leading-none mb-0.5">{value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. About (Condensed) ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000"
                  alt="Industrial Quality"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -right-10 w-64 bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl hidden md:block border border-white/5"
              >
                <div className="text-4xl font-light text-primary mb-2 tracking-tighter">100%</div>
                <div className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] leading-tight">
                  Commitment to <br /> Quality Sourcing
                </div>
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-slate-100 rounded-[2rem] -z-10" />
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/30" />
                  About Narayani Enterprises and Co
                </h2>
                <h3 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-[1.1] mb-8">
                  Building the Future with <br />
                  <span className="serif italic text-primary">Reliability</span> and Trust
                </h3>
                <p className="text-base md:text-lg text-slate-500 mb-12 leading-relaxed font-medium max-w-lg">
                  Established in 2026 and based in Pune, Maharashtra, we are a reliable supplier and trading partner for construction materials, building materials, industrial supplies, and safety equipment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mb-14">
                  {[
                    { title: 'Reliability',          icon: Package,    desc: 'Consistent product availability' },
                    { title: 'Quality Sourcing',     icon: ShieldCheck, desc: 'Trusted manufacturer network' },
                    { title: 'Timely Supply',        icon: Truck,      desc: 'Uninterrupted project progress' },
                    { title: 'Customer Commitment',  icon: Users,      desc: 'Prioritizing your requirements' },
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-slate-900 font-bold text-sm tracking-tight">{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium ml-14 uppercase tracking-wider">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-all group"
                >
                  Learn More About Us
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Industries We Serve ── */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4">Who We Serve</h2>
            <h3 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
              Industries We <span className="serif italic text-primary">Support</span>
            </h3>
            <p className="mt-4 text-slate-500 text-sm font-medium max-w-xl mx-auto leading-relaxed">
              From large contractors to niche developers, our supply network supports every segment of the construction ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: 'Construction & Infrastructure',
                desc: 'Cement, steel, aggregates and structural materials for large-scale sites.',
                image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800',
              },
              {
                icon: Landmark,
                title: 'Real Estate Developers',
                desc: 'Finishing materials, tiles, pipes and fixtures for residential & commercial projects.',
                image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
              },
              {
                icon: Factory,
                title: 'Industrial Projects',
                desc: 'Industrial supplies, hardware and safety equipment for manufacturing facilities.',
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
              },
              {
                icon: HardHat,
                title: 'Government & Institutional',
                desc: 'Bulk supply of materials for public infrastructure and institutional construction.',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                {/* Text */}
                <div className="bg-white p-6">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 tracking-tight leading-snug">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Featured Products ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Inventory</h2>
              <h3 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
                Featured <span className="serif italic text-primary">Material</span> Solutions
              </h3>
            </div>
            <Link
              to="/products"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
            >
              View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
                    Inquire <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. How It Works ── */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000"
                  alt="Our Supply Process"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
              </div>
              {/* Small accent card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl hidden md:block">
                <div className="text-2xl font-bold tracking-tight">3</div>
                <div className="text-[9px] font-bold uppercase tracking-widest opacity-80">Simple Steps</div>
              </div>
            </motion.div>

            {/* Right — steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary/30" />
                Our Process
              </h2>
              <h3 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-[1.1] mb-12">
                How We <span className="serif italic text-primary">Work</span>
              </h3>

              <div className="space-y-8 relative before:absolute before:top-5 before:bottom-5 before:left-[19px] before:w-px before:bg-slate-100">
                {[
                  {
                    icon: PhoneCall,
                    step: '01',
                    title: 'Submit Your Inquiry',
                    desc: 'Tell us your material requirements — product type, quantity, and project location — via call, WhatsApp, or the contact form.',
                  },
                  {
                    icon: FileText,
                    step: '02',
                    title: 'Receive a Quote',
                    desc: 'We source from our trusted supplier network and respond with a competitive, itemised quote within 24 hours.',
                  },
                  {
                    icon: Truck,
                    step: '03',
                    title: 'Materials Delivered',
                    desc: 'Once confirmed, we coordinate timely delivery of quality materials directly to your project site.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="flex gap-6 relative z-10 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 group-hover:border-primary group-hover:bg-primary transition-all duration-300 flex items-center justify-center shrink-0 shadow-sm">
                      <item.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="pt-1.5">
                      <div className="text-[9px] font-bold text-primary uppercase tracking-[0.3em] mb-1">{item.step}</div>
                      <h4 className="text-sm font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-primary transition-all group shadow-xl shadow-slate-900/10 hover:scale-105 active:scale-95"
                >
                  Start an Inquiry
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920")' }}
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
              Ready to Build Your <span className="italic serif text-primary">Vision?</span>
            </h2>
            <p className="text-slate-300/80 text-sm md:text-base font-medium mb-10 leading-relaxed max-w-xl mx-auto">
              Partner with Narayani Enterprises and Co for reliable, high-quality materials and professional industrial solutions. Let's build something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center gap-2.5 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-amber-500 transition-all group shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Get Started Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2.5 bg-white/5 text-white border border-white/10 px-8 py-3.5 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-xl hover:scale-105 active:scale-95"
              >
                Browse Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
