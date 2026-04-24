"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, X } from 'lucide-react';
import Image from 'next/image';
import { certificates, Certificate } from '@/data/certificates';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = React.useState<Certificate | null>(null);

  React.useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-32 relative overflow-hidden bg-black/20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block border border-purple-500/20">
            Professional Recognition
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Sertifikasi <span className="gradient-text-purple">& Penghargaan</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Bukti kompetensi teknis tingkat tinggi yang telah diakui secara global.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card group p-8 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition-all flex flex-col h-full relative cursor-pointer active:scale-95"
            >
              <div className="absolute top-6 right-6 text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
                <ShieldCheck size={40} />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-lg group-hover:shadow-purple-500/20">
                <Award size={28} />
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-purple-500/80 font-bold text-xs uppercase tracking-widest">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {cert.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-400 text-[9px] font-black uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                <div className="text-zinc-500">
                  <p className="text-[9px] font-black uppercase tracking-widest">Tahun Terbit</p>
                  <p className="text-sm font-bold text-white">{cert.year}</p>
                </div>
                <button 
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500 text-purple-400 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-purple-500/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                >
                  <span>Lihat Dokumen</span>
                  <ExternalLink size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
            <div className="fixed inset-0 z-[300] flex items-center justify-center p-2 md:p-6 overflow-y-auto custom-scrollbar">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedCert(null)}
                    className="fixed inset-0 bg-black/98 backdrop-blur-2xl cursor-zoom-out"
                />
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    className="relative w-full max-w-5xl bg-[#fdfdfd] rounded-sm shadow-[0_0_150px_rgba(168,85,247,0.3)] p-6 md:p-12 text-zinc-900 border-[12px] md:border-[20px] border-zinc-100 flex flex-col my-auto min-h-fit"
                >
                    {/* Realistic Paper Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/linen-paper.png')]" />
                    
                    {/* Lighting & Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/5 pointer-events-none" />

                    {/* Microprint Security Text */}
                    <div className="absolute bottom-[4px] left-8 right-8 flex justify-between opacity-30 pointer-events-none select-none">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <span key={i} className="text-[5px] font-black tracking-[0.2em] uppercase text-zinc-400">
                                {selectedCert.id.split('-')[0]} AUTHENTIC DOCUMENT • VERIFIED • 
                            </span>
                        ))}
                    </div>

                    {/* Gold Foil Border Inset */}
                    <div className="absolute inset-[15px] border-[1px] border-yellow-600/30 pointer-events-none rounded-sm shimmer-gold" />
                    <div className="absolute inset-[40px] border-[1px] border-yellow-600/10 pointer-events-none rounded-sm" />

                    {/* Certificate ID (Top Left Corner - AS REQUESTED) */}
                    <div className="absolute top-14 left-14 text-left z-20">
                        <p className="text-[7px] font-montserrat font-black uppercase tracking-widest text-zinc-400 mb-1">Certificate ID</p>
                        <p className="text-[11px] font-mono font-bold text-zinc-800 bg-zinc-100/50 px-3 py-1 rounded-sm border border-zinc-200 uppercase tracking-widest">{selectedCert.fullId}</p>
                    </div>

                    {/* Certificate Content */}
                    <div className="flex flex-col items-center text-center relative z-10 flex-grow">
                        {/* Top Center: Holographic Logo */}
                        <div className="relative mb-6 md:mb-8">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-indigo-200 via-purple-300 to-amber-100 shadow-xl flex items-center justify-center p-1 border border-white/40 ring-1 ring-black/5">
                                <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-black/5 shadow-inner">
                                    <div className="text-zinc-800 opacity-60 filter drop-shadow-md">
                                        <Award size={36} strokeWidth={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <h1 className="text-lg md:text-2xl font-trajan font-bold text-[#1A1A1A] mb-3 md:mb-6 tracking-[0.08em] leading-tight max-w-4xl px-4 uppercase">
                            {selectedCert.title}
                        </h1>
                        
                        <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent mb-4 md:mb-8" />

                        <p className="text-zinc-500 font-montserrat text-[9px] md:text-[10px] mb-1 font-bold tracking-wide uppercase">
                            This certifies that
                        </p>
                        
                        <h2 className="text-3xl md:text-5xl font-cursive text-[#0D0D0D] mb-4 md:mb-8 px-6 leading-none py-1 drop-shadow-sm">
                            Mochamad Resta Fahlefi
                        </h2>
                        
                        <p className="text-zinc-500 max-w-2xl mb-6 md:mb-10 font-lato text-[9px] md:text-xs leading-relaxed px-4 font-medium italic">
                            {selectedCert.description}
                        </p>
                    </div>

                    {/* Authority Block */}
                    <div className="relative z-10 text-center mb-16">
                        <p className="text-[7px] font-montserrat font-black text-zinc-400 uppercase tracking-[0.2em] leading-loose">
                            {selectedCert.authorityBlock}
                        </p>
                    </div>

                    {/* Lower Section: Signatures & QR */}
                    <div className="w-full flex justify-between items-end relative z-10 pt-4 md:pt-8 border-t border-zinc-100">
                        {/* Left Side: Signature */}
                        <div className="flex-1">
                            <div className="relative inline-block text-left group">
                                <p className="text-xl md:text-2xl font-cursive-alt text-[#1E40AF] rotate-[-2deg] mb-1 opacity-95 ink-shadow">
                                    {selectedCert.signatures.left.name}
                                </p>
                                <div className="h-[1px] bg-zinc-300 w-full min-w-[150px] md:min-w-[220px]" />
                                <p className="text-[6px] md:text-[7px] font-montserrat font-black uppercase tracking-widest text-zinc-500 mt-1 max-w-[220px]">
                                    {selectedCert.signatures.left.role}
                                </p>
                            </div>
                        </div>

                        {/* Center Embossed Seal */}
                        <div className="flex flex-col items-center justify-center px-2 md:px-6 mb-[-5px]">
                            <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                                <div className="absolute inset-0 bg-yellow-600/10 rounded-full" />
                                <div className="absolute inset-1 border-[1px] border-yellow-600/40 rounded-full shadow-inner" />
                                <div className="text-yellow-800 flex flex-col items-center justify-center text-center p-1 relative z-10 filter drop-shadow-lg">
                                    <ShieldCheck size={28} strokeWidth={1.5} />
                                    <p className="text-[4px] md:text-[5px] font-black uppercase leading-tight mt-0.5 tracking-tighter w-12 md:w-16">
                                        {selectedCert.sealText}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Signature + QR Code */}
                        <div className="flex-1 flex flex-col items-end">
                            <div className="flex items-end gap-4 md:gap-6 text-right">
                                <div className="relative inline-block text-right group">
                                    <p className="text-xl md:text-2xl font-cursive-alt-2 text-[#1E40AF] rotate-[2deg] mb-1 opacity-95 ink-shadow">
                                        {selectedCert.signatures.right.name}
                                    </p>
                                    <div className="h-[1px] bg-zinc-300 w-full min-w-[150px] md:min-w-[220px]" />
                                    <p className="text-[6px] md:text-[7px] font-montserrat font-black uppercase tracking-widest text-zinc-500 mt-1 max-w-[220px]">
                                        {selectedCert.signatures.right.role}
                                    </p>
                                </div>
                                
                                <div className="flex flex-col items-center gap-1">
                                    <div className="p-1 bg-white rounded-none border-[1px] border-black/10 shadow-sm">
                                        <Image 
                                            src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(selectedCert.qrUrl)}`}
                                            alt="QR Verification"
                                            width={50}
                                            height={50}
                                            className="rendering-pixelated grayscale contrast-[1.2]"
                                        />
                                    </div>
                                    <p className="text-[5px] font-black text-zinc-400 font-montserrat uppercase tracking-wider">Verify</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <p className="text-[6px] md:text-[7px] font-montserrat font-black uppercase tracking-[1em] text-zinc-300 pointer-events-none">
                            MUSEUM QUALITY • 300 DPI SCAN
                        </p>
                    </div>
                </motion.div>

                <button 
                    onClick={() => setSelectedCert(null)}
                    className="fixed top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-3xl text-white flex items-center justify-center hover:bg-white/20 transition-all z-[310] border border-white/10 shadow-2xl"
                >
                    <X size={28} />
                </button>
            </div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Great+Vibes&family=Montserrat:wght@400;700;900&family=Lato:wght@400;700&family=Space+Mono:wght@700&family=Pinyon+Script&family=Mrs+Saint+Delafield&family=Monsieur+La+Doulaise&display=swap');

        .gradient-text-purple {
          background: linear-gradient(135deg, #a855f7 0%, #d946ef 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .font-trajan { font-family: 'Cinzel', serif; }
        .font-cursive { font-family: 'Pinyon Script', cursive; }
        .font-cursive-alt { font-family: 'Mrs Saint Delafield', cursive; }
        .font-cursive-alt-2 { font-family: 'Monsieur La Doulaise', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-lato { font-family: 'Lato', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }

        .ink-shadow {
            filter: drop-shadow(1px 1px 1px rgba(30, 64, 175, 0.3));
        }

        .shimmer-gold {
            animation: shimmer 8s infinite linear;
            background: linear-gradient(
                90deg,
                rgba(212, 175, 55, 0) 0%,
                rgba(212, 175, 55, 0.3) 50%,
                rgba(212, 175, 55, 0) 100%
            );
            background-size: 200% 100%;
        }

        @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        .rendering-pixelated {
            image-rendering: pixelated;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
