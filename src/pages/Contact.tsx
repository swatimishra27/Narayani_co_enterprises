import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send, ChevronDown, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = '919209157335';
const EMAIL_ADDRESS   = 'reachus@narayanibuildmart.com';

const subjects = [
  'Material Inquiry',
  'Bulk Order Quote',
  'Safety Equipment Inquiry',
  'Partnership Request',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: subjects[0],
    message: '',
  });
  const [sent, setSent] = useState<'whatsapp' | 'email' | null>(null);

  const update = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const isValid = form.name.trim() && form.phone.trim() && form.message.trim();

  const buildMessage = () =>
    `Hi Narayani Enterprises and Co,\n\nName: ${form.name}\nPhone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ''}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;

  const handleWhatsApp = () => {
    if (!isValid) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, '_blank');
    setSent('whatsapp');
  };

  const handleEmail = () => {
    if (!isValid) return;
    const subject = encodeURIComponent(`[Narayani Enterprises] ${form.subject}`);
    const body    = encodeURIComponent(buildMessage());
    window.open(`mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`, '_blank');
    setSent('email');
  };

  const handleReset = () => {
    setForm({ name: '', phone: '', email: '', subject: subjects[0], message: '' });
    setSent(null);
  };

  const inputCls = 'w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-slate-300 text-slate-900';

  return (
    <div className="page-transition">

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-light text-white leading-tight drop-shadow-xl tracking-tighter"
          >
            Contact <span className="serif italic text-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-slate-300 text-sm font-medium"
          >
            Send us your inquiry — we respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* ── Left: Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4"
            >
              {/* Info card */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight">Narayani Enterprises and Co</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Supplier & Distribution Partner — Construction, Building, Safety & Industrial
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      icon: Phone,
                      label: 'Phone',
                      text: '+91 9209157335 / 9990161075',
                      href: 'tel:+919209157335',
                    },
                    {
                      icon: Mail,
                      label: 'Email',
                      text: EMAIL_ADDRESS,
                      href: `mailto:${EMAIL_ADDRESS}`,
                    },
                    {
                      icon: MapPin,
                      label: 'Address',
                      text: 'Happy City, Talegaon Dabhade, Pune – 410506, Maharashtra',
                      href: undefined,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-semibold text-slate-800 hover:text-primary transition-colors leading-snug">
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-800 leading-snug">{item.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-center">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">GST Number</div>
                    <div className="text-[10px] font-bold text-slate-700">On Request</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Udyam Reg.</div>
                    <div className="text-[10px] font-bold text-slate-700">On Request</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>

              <p className="text-center text-[10px] text-slate-400 font-medium">
                Supporting construction & infrastructure projects PAN India.
              </p>
            </motion.div>

            {/* ── Right: Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10">

                {sent ? (
                  /* Success state */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                      {sent === 'whatsapp' ? 'WhatsApp Opened!' : 'Email Draft Ready!'}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium max-w-xs mx-auto leading-relaxed">
                      {sent === 'whatsapp'
                        ? 'Your message has been pre-filled in WhatsApp. Just hit send!'
                        : 'Your email client has opened with the inquiry pre-filled. Just send it!'}
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-8 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-slate-900 transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-light text-slate-900 tracking-tight">
                        Send an <span className="serif italic text-primary">Inquiry</span>
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                        Fill in your details and we'll get back to you via WhatsApp or Email — your choice.
                      </p>
                    </div>

                    <div className="space-y-5">
                      {/* Name + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={e => update('name', e.target.value)}
                            placeholder="Rahul Sharma"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={e => update('phone', e.target.value)}
                            placeholder="+91 98765 43210"
                            className={inputCls}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address <span className="normal-case tracking-normal font-medium text-slate-300">(optional)</span></label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => update('email', e.target.value)}
                          placeholder="rahul@company.com"
                          className={inputCls}
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Subject *</label>
                        <div className="relative">
                          <select
                            value={form.subject}
                            onChange={e => update('subject', e.target.value)}
                            className={`${inputCls} appearance-none cursor-pointer pr-10`}
                          >
                            {subjects.map(s => <option key={s}>{s}</option>)}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Message *</label>
                        <textarea
                          rows={4}
                          required
                          value={form.message}
                          onChange={e => update('message', e.target.value)}
                          placeholder="Describe your material requirements, quantity, project location..."
                          className={`${inputCls} resize-none`}
                        />
                      </div>

                      {/* Submit buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                          onClick={handleWhatsApp}
                          disabled={!isValid}
                          className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Send via WhatsApp
                        </button>
                        <button
                          onClick={handleEmail}
                          disabled={!isValid}
                          className="flex-1 flex items-center justify-center gap-2.5 bg-slate-900 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-slate-900/10 hover:scale-[1.02] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-slate-900"
                        >
                          <Send className="w-4 h-4" />
                          Send via Email
                        </button>
                      </div>

                      {!isValid && (
                        <p className="text-[10px] text-slate-400 font-medium text-center">
                          * Name, phone, and message are required
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
