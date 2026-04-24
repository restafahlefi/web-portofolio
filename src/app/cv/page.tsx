"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Download, ArrowLeft, Printer, Briefcase, GraduationCap, Code } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CVPage = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 
    'Node.js', 'Express', 'MongoDB', 'MySQL', 
    'UI/UX Design', 'Figma', 'Tailwind CSS', 'Git & GitHub'
  ];

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechNusa Solutions',
      date: '2023 - Sekarang',
      desc: [
        'Memimpin tim frontend yang terdiri dari 4 developer untuk memigrasikan sistem monolitik lama ke arsitektur micro-frontend menggunakan React dan Next.js.',
        'Mengoptimalkan Core Web Vitals yang berdampak pada peningkatan load time aplikasi sebesar 40%.',
        'Bekerja sama erat dengan tim UI/UX untuk mengimplementasikan Design System perusahaan menggunakan Tailwind CSS.'
      ]
    },
    {
      title: 'Fullstack Web Developer',
      company: 'Creative Studio Web',
      date: '2021 - 2023',
      desc: [
        'Membangun dan memelihara lebih dari 15 website E-Commerce dan Company Profile untuk klien dari berbagai industri.',
        'Mengembangkan RESTful API menggunakan Node.js (Express) dan MongoDB untuk kebutuhan sistem manajemen inventaris.',
        'Mengintegrasikan sistem pembayaran (Payment Gateway) Midtrans ke dalam alur checkout e-commerce.'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white py-12 md:py-20 print:bg-white print:text-black print:p-0">
      {/* Floating Action Buttons (Hidden on Print) */}
      <div className="fixed top-6 right-6 z-[100] flex gap-3 print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-600/20 transition-all active:scale-95"
        >
          <Printer size={18} />
          <span>Simpan PDF</span>
        </button>
        <Link 
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all backdrop-blur-md"
        >
          <ArrowLeft size={18} />
          <span>Kembali</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row print:flex-row print:bg-white print:border-none print:shadow-none print:rounded-none"
        >
          {/* Sidebar */}
          <aside className="md:w-80 bg-blue-600 p-10 md:p-12 print:bg-blue-600 print:text-white print:w-72">
            <div className="text-center md:text-left space-y-8">
              <div className="space-y-4">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                  <Image src="/assets/images/profile.png" alt="Profile" fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl md:text-3xl font-black tracking-tighter">Resta Fahlefi</h1>
                  <p className="text-blue-100 text-sm font-medium opacity-80 uppercase tracking-widest font-mono">Fullstack Engineer</p>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Kontak</h2>
                <div className="space-y-4">
                   {[
                     { icon: <Mail size={16} />, text: 'restavalefi1401@gmail.com' },
                     { icon: <Phone size={16} />, text: '085771964134' },
                     { icon: <MapPin size={16} />, text: 'Jakarta, Indonesia' },
                     { icon: <Instagram size={16} />, text: '@resta.fahlefi' }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm text-blue-50 font-medium">
                        <span className="opacity-70">{item.icon}</span>
                        <span className="break-all">{item.text}</span>
                     </div>
                   ))}
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Keahlian</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                 <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Bahasa</h2>
                 <p className="text-sm text-blue-50 font-medium">Indonesia (Native)</p>
                 <p className="text-sm text-blue-50 font-medium">Inggris (Professional)</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow p-10 md:p-16 bg-white/[0.02] print:bg-white print:text-black">
            <div className="space-y-12">
              {/* Profile */}
              <section className="space-y-6">
                <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                    Profil Profesional
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed print:text-zinc-700">
                  Fullstack Software Engineer dengan dedikasi tinggi dalam merancang arsitektur sistem yang scalable dan antarmuka digital yang interaktif. Memiliki rekam jejak sukses dalam membangun aplikasi web dari nol hingga tahap produksi. Ahli dalam ekosistem JavaScript (MERN Stack & Next.js) serta selalu berorientasi pada clean code dan performa optimal.
                </p>
              </section>

              {/* Experience */}
              <section className="space-y-10">
                <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                    Pengalaman Kerja
                </h2>
                <div className="space-y-10">
                  {experience.map((exp, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-zinc-800 print:border-zinc-200">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0a0a0f] print:border-white" />
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white print:text-black">{exp.title}</h3>
                          <p className="text-blue-500 font-bold text-sm">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-black uppercase tracking-widest text-zinc-500 print:bg-zinc-100 print:text-zinc-600">
                          {exp.date}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.desc.map((d, j) => (
                          <li key={j} className="text-zinc-400 text-sm leading-relaxed print:text-zinc-700">
                            • {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="space-y-6">
                <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                    Pendidikan
                </h2>
                <div className="relative pl-8 border-l-2 border-zinc-800 print:border-zinc-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0a0a0f] print:border-white" />
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white print:text-black">S1 Teknik Informatika</h3>
                      <p className="text-blue-500 font-bold text-sm">Universitas Bina Sarana Informatika (UBSI)</p>
                    </div>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-black uppercase tracking-widest text-zinc-500 print:bg-zinc-100 print:text-zinc-600">
                      2022 - 2026
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed print:text-zinc-700">
                    Sedang menempuh pendidikan sarjana dengan fokus pada pengembangan perangkat lunak (Software Engineering) dan arsitektur sistem informasi.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default CVPage;
