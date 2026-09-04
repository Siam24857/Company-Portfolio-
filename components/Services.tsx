'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Smartphone, Palette, Bot, Cloud, Layout } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Business websites, e-commerce platforms, SaaS applications, landing pages, portfolio websites, and custom web applications built with modern technologies.',
    icon: Globe,
    tag: 'CORE',
    tagType: 'core',
  },
  {
    id: 2,
    title: 'Full-Stack Development',
    description: 'Frontend and backend development, REST APIs, authentication systems, database architecture, and admin dashboards.',
    icon: Layout,
    tag: 'CORE',
    tagType: 'core',
  },
  {
    id: 3,
    title: 'AI & Automation',
    description: 'AI-powered applications, business automation, intelligent dashboards, AI chat systems, and workflow automation.',
    icon: Bot,
    tag: 'TRENDING',
    tagType: 'trending',
  },
  {
    id: 4,
    title: 'Mobile & Application Development',
    description: 'Modern application development, API-driven applications, cross-platform solutions, and custom business applications.',
    icon: Smartphone,
    tag: null,
    tagType: null,
  },
  {
    id: 5,
    title: 'Cloud & Infrastructure',
    description: 'Cloud deployment, server configuration, database management, CI/CD, Docker-based infrastructure, and scalable backend architecture.',
    icon: Cloud,
    tag: null,
    tagType: null,
  },
  {
    id: 6,
    title: 'UI/UX & Product Design',
    description: 'Website UI/UX, SaaS interfaces, dashboard design, design systems, responsive interfaces, and interactive user experiences.',
    icon: Palette,
    tag: null,
    tagType: null,
  },
]

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
          {services.map((service, index) => {
            const Icon = service.icon
            return (
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
                      service.tagType === 'core'
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
                  <Icon className="w-6 h-6" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
