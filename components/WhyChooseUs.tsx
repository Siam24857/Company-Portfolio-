'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Settings, Bot, Users, Rocket, Shield, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Settings,
    title: 'Engineering First',
    description: 'We focus on maintainable architecture, performance, security, and scalability in every project.',
  },
  {
    icon: Bot,
    title: 'AI-Ready',
    description: 'We integrate modern AI capabilities into practical software products where they create real value.',
  },
  {
    icon: Users,
    title: 'Product Mindset',
    description: 'We don\'t just build websites—we build digital products designed around real users and business objectives.',
  },
  {
    icon: Rocket,
    title: 'Scalable Architecture',
    description: 'Our systems are designed to evolve as businesses grow, ensuring long-term viability and flexibility.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Security and reliability are built into every solution we deliver, from architecture to deployment.',
  },
  {
    icon: Zap,
    title: 'Modern Technology',
    description: 'We use contemporary technologies and development practices to deliver reliable digital experiences.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-28 sm:py-36 bg-ideon-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[rgba(59,130,246,0.03)] to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">WHY IDEONS</p>
          <h2 className="section-title">The IDEONS Difference</h2>
          <p className="font-inter text-base text-[rgba(248,250,252,0.50)] max-w-2xl mx-auto mt-4">
            We don't just build projects — we build products engineered for growth, scalability, and long-term success.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group glass-card p-8 no-border-radius transition-all duration-300 hover:border-ideon-cyan hover:shadow-[0_0_60px_rgba(6,182,212,0.1)]"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-[rgba(6,182,212,0.25)] bg-[rgba(6,182,212,0.10)] mb-6 text-ideon-cyan transition-all duration-300 group-hover:bg-[rgba(6,182,212,0.18)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-space font-bold text-lg text-ideon-white mb-3">
                  {reason.title}
                </h3>
                <p className="font-inter text-sm text-[rgba(248,250,252,0.50)] leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
