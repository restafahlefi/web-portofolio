"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Send } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-blue-400 font-medium mb-4 flex items-center justify-center gap-2"
          >
            <span className="animate-bounce">👋</span> Halo, perkenalkan saya
          </motion.p>

          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
            Mochamad Resta <span className="gradient-text">Fahlefi</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-zinc-300 mb-8">
            Fullstack <span className="gradient-text">Software Engineer</span>
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Mengubah ide brilian menjadi produk digital yang fungsional.
            Berpengalaman merancang UI/UX yang elegan dan membangun sistem backend yang tangguh untuk bisnis modern.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 group"
            >
              <span>Lihat Karya Saya</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-10 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white rounded-full font-bold flex items-center gap-2 transition-all hover:bg-zinc-800"
            >
              <span>Hubungi Saya</span>
              <Send size={18} />
            </a>

            <Link
              href="/cv"
              className="px-10 py-4 bg-transparent border border-zinc-800 hover:border-blue-500/30 text-zinc-400 hover:text-white rounded-full font-medium flex items-center gap-2 transition-all"
            >
              <FileText size={18} />
              <span>Lihat CV</span>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
        <div className="w-[1px] h-12 bg-zinc-800 rounded-full relative overflow-hidden">
          <motion.div
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-blue-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
