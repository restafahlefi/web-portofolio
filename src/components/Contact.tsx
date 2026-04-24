"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, Send, Loader2 } from 'lucide-react';
import Toast from './Toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; visible: boolean }>({
    message: '',
    type: 'success',
    visible: false
  });

  const contactInfo = [
    { icon: <Mail size={24} />, label: 'Email', value: 'restavalefi1401@gmail.com' },
    { icon: <Phone size={24} />, label: 'WhatsApp / Phone', value: '085771964134' },
    { icon: <Instagram size={24} />, label: 'Instagram', value: '@resta.fahlefi' },
    { icon: <MapPin size={24} />, label: 'Lokasi', value: 'Jakarta, Indonesia' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setToast({
          message: 'Pesan Anda berhasil terkirim! Saya akan membalasnya segera.',
          type: 'success',
          visible: true
        });
        form.reset();
      } else {
        setToast({
          message: data.error || 'Terjadi kesalahan. Silakan coba lagi nanti.',
          type: 'error',
          visible: true
        });
      }
    } catch (error) {
      setToast({
        message: 'Gagal mengirim pesan. Periksa koneksi internet Anda.',
        type: 'error',
        visible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <Toast 
        isVisible={toast.visible}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, visible: false }))}
      />

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block border border-blue-500/20">
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Tertarik <span className="gradient-text">Bekerja Sama?</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg leading-relaxed">
            Punya ide proyek, tawaran kerja, atau sekadar ingin menyapa? Hubungi saya melalui form di bawah ini.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 rounded-[2rem] group border border-white/5 hover:border-blue-500/30 transition-all flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg group-hover:shadow-blue-500/20">
                  {item.icon}
                </div>
                <div className="mt-auto">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-3">{item.label}</h3>
                    <p className="text-white font-bold text-lg leading-snug break-words">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.02]"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Nama Lengkap</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-blue-500/50 transition-all text-white font-medium placeholder:text-zinc-600"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Alamat Email</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-blue-500/50 transition-all text-white font-medium placeholder:text-zinc-600"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Pesan Anda</label>
                <textarea 
                  required
                  name="message"
                  rows={5}
                  placeholder="Ceritakan sedikit tentang proyek atau kebutuhan Anda..."
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-blue-500/50 transition-all text-white font-medium placeholder:text-zinc-600 resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white rounded-2xl font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-blue-600/30 active:scale-[0.98] group"
              >
                {isSubmitting ? (
                    <>
                        <span>Mengirim...</span>
                        <Loader2 size={20} className="animate-spin" />
                    </>
                ) : (
                    <>
                        <span>Kirim Pesan</span>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
