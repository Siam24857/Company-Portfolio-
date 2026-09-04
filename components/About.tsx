'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Zap, Shield, Rocket, Users, Settings, Bot } from 'lucide-react'

const values = [
  {
    title: 'Engineering First',
    description: 'We focus on maintainable architecture, performance, security, and scalability in every project we deliver.',
  },
  {
    title: 'AI-Ready',
    description: 'We integrate modern AI capabilities into practical software products where they create real value.',
  },
  {
    title: 'Product Mindset',
    description: 'We don\'t just build websites—we build digital products designed around real users and business objectives.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Our systems are designed to evolve as businesses grow, ensuring long-term viability and flexibility.',
  },
  {
    title: 'Modern Technology',
    description: 'We use contemporary technologies and development practices to deliver reliable digital experiences.',
  },
  {
    title: 'Client Partnership',
    description: 'We work closely with our clients to understand their vision and deliver solutions that exceed expectations.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 sm:py-36 bg-ideon-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(6,182,212,0.03)] to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="section-eyebrow">WHO WE ARE</p>
            <h2 className="font-syne font-extrabold text-clamp-hero text-ideon-white mb-6 leading-tight-custom">
              IDEONS
            </h2>
            <div className="space-y-6">
              <p className="font-inter text-base text-[rgba(248,250,252,0.60)] leading-relaxed">
                IDEONS is a technology-focused software company dedicated to building modern, scalable, and intelligent digital solutions for businesses, startups, and organizations.
              </p>
              <p className="font-inter text-base text-[rgba(248,250,252,0.60)] leading-relaxed">
                We combine software engineering, modern web technologies, AI, cloud infrastructure, and product design to transform ideas into reliable digital products.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="glass-card p-6 no-border-radius">
                <h3 className="font-space font-bold text-sm text-ideon-cyan uppercase tracking-wider mb-3">Our Mission</h3>
                <p className="font-inter text-sm text-[rgba(248,250,252,0.60)] leading-relaxed">
                  To build technology that solves real problems. IDEONS aims to make advanced technology accessible to businesses and organizations by developing products that are scalable, secure, intelligent, and easy to use.
                </p>
              </div>
              <div className="glass-card p-6 no-border-radius">
                <h3 className="font-space font-bold text-sm text-ideon-cyan uppercase tracking-wider mb-3">Our Vision</h3>
                <p className="font-inter text-sm text-[rgba(248,250,252,0.60)] leading-relaxed">
                  To become a globally recognized technology company building the next generation of digital products. IDEONS focuses on long-term innovation rather than simply delivering individual projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div>
            <h3 className="font-space font-bold text-lg text-ideon-white mb-8">What Makes IDEONS Different</h3>
            <div className="space-y-6">
              {values.map((value, index) => {
                const icons = [Settings, Bot, Users, Rocket, Shield, Zap]
                const Icon = icons[index]
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 flex items-center justify-center border border-[rgba(6,182,212,0.25)] bg-[rgba(6,182,212,0.10)] text-ideon-cyan transition-all duration-300 group-hover:bg-[rgba(6,182,212,0.18)]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-space font-bold text-base text-ideon-white mb-1 group-hover:text-ideon-cyan transition-colors duration-200">
                        {value.title}
                      </h4>
                      <p className="font-inter text-sm text-[rgba(248,250,252,0.50)] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
