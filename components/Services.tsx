'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Pixel-perfect, responsive websites and web apps built with React, Next.js, and modern frameworks. Performance-first, SEO-optimized, and scalable.',
    icon: 'browser',
    tag: 'POPULAR',
    tagType: 'popular',
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with React Native and Flutter. Native performance, beautiful UI, and seamless user experiences.',
    icon: 'smartphone',
    tag: null,
    tagType: null,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that converts. Wireframes, prototypes, and high-fidelity designs that balance aesthetics with usability.',
    icon: 'figma',
    tag: 'TRENDING',
    tagType: 'trending',
  },
  {
    id: 4,
    title: 'Software Solutions',
    description: 'Custom enterprise software, APIs, and backend systems. Robust architecture, clean code, and scalable infrastructure.',
    icon: 'code',
    tag: null,
    tagType: null,
  },
  {
    id: 5,
    title: 'AI & Automation',
    description: 'Intelligent solutions powered by AI and machine learning. Chatbots, automation workflows, and data-driven decision systems.',
    icon: 'ai',
    tag: 'NEW',
    tagType: 'new',
  },
  {
    id: 6,
    title: 'Digital Transformation',
    description: 'End-to-end digital strategy and implementation. From legacy system modernization to complete digital ecosystem redesign.',
    icon: 'rocket',
    tag: null,
    tagType: null,
  },
]

const icons: Record<string, JSX.Element> = {
  browser: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  smartphone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  figma: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  ai: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
      <path d="M16 14a4 4 0 0 1-8 0" />
      <path d="M12 18v4" />
      <path d="M8 22h8" />
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-28 sm:py-36 bg-ideon-black">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-16">
          <p className="section-eyebrow">WHAT WE DO</p>
          <h2 className="section-title">Services Built For The Digital Age</h2>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative glass-card p-8 no-border-radius transition-all duration-300 hover:border-ideon-cyan glow-hover cursor-pointer"
            >
              {/* Badge */}
              {service.tag && (
                <span
                  className={`absolute top-4 right-4 font-space text-[9px] font-bold uppercase tracking-wider px-2 py-1 no-border-radius ${
                    service.tagType === 'popular'
                      ? 'bg-ideon-orange text-ideon-black'
                      : service.tagType === 'trending'
                      ? 'bg-ideon-cyan text-ideon-black'
                      : 'bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.40)] text-ideon-purple'
                  }`}
                >
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-[rgba(6,182,212,0.25)] bg-[rgba(6,182,212,0.10)] mb-6 text-ideon-cyan transition-all duration-300 group-hover:bg-[rgba(6,182,212,0.18)]">
                {icons[service.icon]}
              </div>

              {/* Title */}
              <h3 className="font-space font-bold text-lg text-ideon-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm text-[rgba(248,250,252,0.50)] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More */}
              <span className="font-mono text-[11px] font-bold text-ideon-orange opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 inline-flex items-center gap-1">
                LEARN MORE <span className="text-xs">→</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
