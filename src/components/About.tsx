"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'React / Next.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PHP / Laravel', icon: '🐘' },
    { name: 'MySQL / MongoDB', icon: '🗄️' },
    { name: 'HTML / CSS / Sass', icon: '🎨' },
    { name: 'Git / GitHub', icon: '🔧' },
  ];

  const stats = [
    { number: '5', label: 'Tahun Pengalaman' },
    { number: '50', label: 'Proyek Selesai' },
    { number: '20', label: 'Klien Puas' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block border border-blue-500/20">
            Tentang Saya
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Kenali Saya <span className="gradient-text">Lebih Dekat</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                    Halo! Saya Mochamad Resta Fahlefi, seorang <strong className="text-white">Fullstack Software Engineer</strong> yang berfokus pada perancangan arsitektur sistem berskala besar dan pembuatan antarmuka digital yang memukau.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    Dengan lebih dari <span className="text-white font-bold">5 tahun pengalaman</span> di industri teknologi, saya telah membantu puluhan startup dan perusahaan enterprise mentransformasi ide bisnis mereka menjadi produk nyata yang <em className="text-blue-400 italic font-medium">market-ready</em>.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    Keahlian saya mencakup seluruh siklus hidup pengembangan (<em>Software Development Life Cycle</em>). Mulai dari tahap riset UI/UX, pengembangan Frontend reaktif, perancangan API Backend yang aman, hingga proses Deployment Cloud. Saya terobsesi dengan <strong>clean code</strong> dan optimisasi performa.
                </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-left">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1">
                            {stat.number}<span className="text-blue-500">+</span>
                        </div>
                        <div className="text-[10px] md:text-xs uppercase tracking-wider text-zinc-500 font-bold leading-tight">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-[2.5rem] relative group"
          >
            <div className="absolute inset-0 bg-blue-500/5 rounded-[2.5rem] group-hover:bg-blue-500/10 transition-colors" />
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-lg">🛠️</span>
                    Tech Stack
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill) => (
                    <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all"
                    >
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-sm font-bold text-zinc-300 tracking-tight">{skill.name}</span>
                    </motion.div>
                    ))}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
