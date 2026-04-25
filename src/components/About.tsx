"use client";

import Image from 'next/image';
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-zinc-900">
              <Image 
                src="/assets/images/profile.png" 
                alt="Resta Fahlefi" 
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 filter grayscale brightness-75 contrast-125"
              />
              {/* Overlay to further blend the red background if filters aren't enough */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
            </div>
            
            {/* Decorative frames */}
            <div className="absolute -inset-4 border border-blue-500/20 rounded-[3.5rem] -z-10 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute -inset-8 border border-purple-500/10 rounded-[4rem] -z-20 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>

          {/* Bio Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
                <p className="text-zinc-300 text-xl md:text-2xl font-medium leading-relaxed">
                    Halo! Saya Mochamad Resta Fahlefi, seorang <strong className="text-white">Fullstack Software Engineer</strong>.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    Dengan lebih dari <span className="text-white font-bold">5 tahun pengalaman</span> di industri teknologi, saya telah membantu puluhan startup dan perusahaan enterprise mentransformasi ide bisnis mereka menjadi produk nyata.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    Saya terobsesi dengan <strong>clean code</strong> dan optimisasi performa. Mulai dari tahap riset UI/UX hingga proses Deployment Cloud, saya memastikan setiap baris kode memberikan nilai maksimal bagi pengguna.
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
        </div>

        {/* Tech Stack Grid - Now full width below */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-[3rem] relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[3rem]" />
          <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <h3 className="text-3xl font-bold flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl">🛠️</span>
                    Keahlian Utama
                </h3>
                <p className="text-zinc-500 max-w-md">
                    Menggunakan teknologi terkini untuk membangun aplikasi yang cepat, aman, dan mudah dikelola.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.map((skill) => (
                  <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(59, 130, 246, 0.3)' }}
                      className="flex flex-col items-center gap-4 p-6 rounded-[2rem] bg-white/5 border border-white/5 transition-all text-center"
                  >
                      <span className="text-4xl mb-2">{skill.icon}</span>
                      <span className="text-sm font-bold text-zinc-300 tracking-tight">{skill.name}</span>
                  </motion.div>
                  ))}
              </div>
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default About;
