"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, FileText, Send } from 'lucide-react';
import Link from 'next/link';
import CountUp from 'react-countup';

const Hero = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Available for work</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-blue-400 font-medium mb-4 flex items-center gap-2"
          >
            <span className="animate-bounce">👋</span> Halo, perkenalkan saya
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-tight leading-tight">
            Mochamad Resta <span className="gradient-text">Fahlefi</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2 mb-8">
            Senior Software Engineer
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
            5+ tahun membangun produk SaaS dengan Next.js & Node.js. 
            Dipercaya 20+ klien untuk deliver 50+ project. <span className="text-blue-400/80 font-medium italic">Lihat apa kata mereka di bawah.</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 group"
            >
              <span>Lihat Karya Saya</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white rounded-full font-bold flex items-center gap-2 transition-all hover:bg-zinc-800"
            >
              <span>Hubungi Saya</span>
              <Send size={18} />
            </a>

            <Link
              href="/cv"
              className="px-8 py-4 bg-transparent border border-zinc-800 hover:border-blue-500/30 text-zinc-400 hover:text-white rounded-full font-medium flex items-center gap-2 transition-all"
            >
              <FileText size={18} />
              <span>Lihat CV</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Social Proof Grid */}
        <div ref={statsRef} className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }} 
            className="border-beam-container p-[1px] rounded-2xl group cursor-pointer"
          >
            <div className="border-beam-content p-6 text-center transition-all duration-300 group-hover:bg-blue-500/5 group-hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {isStatsInView ? <CountUp end={5} duration={2} /> : '0'}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Tahun Pengalaman</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }} 
            className="border-beam-container p-[1px] rounded-2xl group cursor-pointer"
          >
            <div className="border-beam-content p-6 text-center transition-all duration-300 group-hover:bg-blue-500/5 group-hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {isStatsInView ? <CountUp end={50} duration={2} /> : '0'}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Project Shipped</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }} 
            className="col-span-2 border-beam-container p-[1px] rounded-2xl group cursor-pointer"
          >
            <div className="border-beam-content p-6 text-center transition-all duration-300 group-hover:bg-blue-500/5 group-hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {isStatsInView ? <CountUp end={20} duration={2} /> : '0'}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Klien Puas</p>
            </div>
          </motion.div>
        </div>

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
