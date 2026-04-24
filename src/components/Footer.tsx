"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050508] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tighter">
              RF<span className="text-blue-500">.</span>dev
            </h2>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
                Membangun solusi digital masa depan dengan perpaduan desain presisi dan kode yang tangguh.
            </p>
            <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Available for New Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Projects', 'Experience', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-400 hover:text-white transition-colors flex items-center group gap-2">
                    {link}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: '#' },
                { icon: <Linkedin size={20} />, href: '#' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Mail size={20} />, href: '#' }
              ].map((social, i) => (
                <a 
                    key={i} 
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-zinc-500">hello@rfdev.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium text-zinc-600 tracking-widest uppercase">
            © {currentYear} RF.dev — Crafted with passion and code.
          </p>
          <div className="flex items-center gap-6">
            <div className="text-[10px] text-zinc-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                V2.4.0-Stable
            </div>
            <div className="text-[10px] text-zinc-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                System Healthy
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />
    </footer>
  );
};

export default Footer;
