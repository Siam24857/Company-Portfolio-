'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Zap, Shield, TrendingUp, Clock, Users } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Innovative Approach',
    description: 'We stay ahead of technology trends, bringing fresh perspectives and modern solutions to every project.',
  },
  {
    icon: Shield,
    title: 'High Quality',
    description: 'Rigorous testing, code reviews, and quality assurance ensure every deliverable meets the highest standards.',
  },
  {
    icon: TrendingUp,
    title: 'Modern Technology',
    description: 'We use the latest frameworks, tools, and best practices to build future-proof digital solutions.',
  },
  {
    icon: Clock,
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow with your business, handling increased load and complexity seamlessly.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your vision drives our work. We maintain transparent communication and collaborative partnerships.',
  },
  {
    icon: CheckCircle2,
    title: 'Proven Track Record',
    description: '50+ successful projects, 30+ happy clients, and a 99% satisfaction rate speak for themselves.',
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
          <p className="section-eyebrow">WHY IDEON</p>
          <h2 className="section-title">The IDEON Difference</h2>
          <p className="font-inter text-base text-[rgba(248,250,252,0.50)] max-w-2xl mx-auto mt-4">
            We don't just build projects — we build partnerships. Here's what sets us apart.
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
