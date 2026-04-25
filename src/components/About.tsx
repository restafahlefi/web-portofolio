'use client'
import { TypeAnimation } from 'react-type-animation'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Zap, Users } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full">TENTANG SAYA</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Kenali Saya <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Lebih Dekat</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-[320px] mx-auto lg:mx-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl -z-10"></div>
            <Image
              src="/resta-about-v3.png"
              alt="Mochamad Resta Fahlefi"
              width={400}
              height={500}
              className="relative w-full h-auto object-contain bg-transparent"
              priority
              unoptimized
            />
          </div>

          <div>
            <div className="min-h-[300px]">
              {isInView && (
                <TypeAnimation
                  key={isInView ? 'visible' : 'hidden'}
                  sequence={[
                    'Halo! Saya Mochamad Resta Fahlefi, seorang Senior Software Engineer berbasis di Jakarta.',
                    800,
                    'Halo! Saya Mochamad Resta Fahlefi, seorang Senior Software Engineer berbasis di Jakarta.\n\nSelama 5+ tahun terakhir, saya fokus membangun produk SaaS end-to-end untuk startup & enterprise. Dari ide di Figma sampai production di AWS/GCP, saya yang pegang.',
                    800,
                    'Halo! Saya Mochamad Resta Fahlefi, seorang Senior Software Engineer berbasis di Jakarta.\n\nSelama 5+ tahun terakhir, saya fokus membangun produk SaaS end-to-end untuk startup & enterprise. Dari ide di Figma sampai production di AWS/GCP, saya yang pegang.\n\nSaya terobsesi dengan 3 hal: Clean Architecture, Core Web Vitals 90+, dan Developer Experience. Karena kode yang bagus harus cepat untuk user dan enak dibaca oleh tim.',
                    800,
                    'Halo! Saya Mochamad Resta Fahlefi, seorang Senior Software Engineer berbasis di Jakarta.\n\nSelama 5+ tahun terakhir, saya fokus membangun produk SaaS end-to-end untuk startup & enterprise. Dari ide di Figma sampai production di AWS/GCP, saya yang pegang.\n\nSaya terobsesi dengan 3 hal: Clean Architecture, Core Web Vitals 90+, dan Developer Experience. Karena kode yang bagus harus cepat untuk user dan enak dibaca oleh tim.\n\nSaat ini saya membantu tim sebagai Tech Lead: mentoring 4+ engineer, code review, dan bikin sistem yang bisa scale dari 0 ke 1 juta user.',
                  ]}
                  wrapper="div"
                  speed={70}
                  className="text-gray-300 leading-relaxed whitespace-pre-line text-lg"
                  repeat={0}
                  cursor={true}
                />
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            >
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg"><Code className="w-5 h-5 text-blue-400" /></div>
                <div>
                  <h4 className="font-semibold text-white">System Architecture</h4>
                  <p className="text-sm text-gray-400">Desain sistem scalable dari 0 sampai 1M users</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg"><Zap className="w-5 h-5 text-blue-400" /></div>
                <div>
                  <h4 className="font-semibold text-white">Performance First</h4>
                  <p className="text-sm text-gray-400">Core Web Vitals 90+ dan optimasi query &lt;100ms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg"><Users className="w-5 h-5 text-blue-400" /></div>
                <div>
                  <h4 className="font-semibold text-white">Lead & Mentor</h4>
                  <p className="text-sm text-gray-400">Lead 4+ engineer & code review untuk quality</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Grid - Restored with SVG Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 glass-card p-8 md:p-12 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-10 flex items-center justify-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">🛠️</span>
              Keahlian Utama
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {[
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'React / Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
              ].map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all"
                >
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
