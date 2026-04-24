"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-black/20">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block border border-blue-500/20">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Apa Kata <span className="gradient-text">Mereka?</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Kepercayaan dari klien dan rekan kerja adalah pencapaian terbesar saya.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all group relative"
            >
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-blue-500/10 transition-colors">
                <Quote size={40} />
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 relative z-10 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white">{t.name}</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">
                    {t.role} @ {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
