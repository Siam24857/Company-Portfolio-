'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js', category: 'Framework', icon: '▲' },
  { name: 'JavaScript', category: 'Language', icon: 'JS' },
  { name: 'TypeScript', category: 'Language', icon: 'TS' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'Git', category: 'Version Control', icon: '📦' },
  { name: 'GitHub', category: 'Platform', icon: '🐙' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'AI/ML', category: 'Emerging Tech', icon: '🤖' },
]

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="technologies" className="py-28 sm:py-36 bg-ideon-navy">
      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">TECH STACK</p>
          <h2 className="section-title">Technologies We Master</h2>
          <p className="font-inter text-base text-[rgba(248,250,252,0.50)] max-w-2xl mx-auto mt-4">
            We leverage modern, proven technologies to build scalable, high-performance solutions.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative glass-card p-6 no-border-radius text-center transition-all duration-300 hover:border-ideon-cyan hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] cursor-pointer"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-space font-bold text-sm text-ideon-white mb-1">
                {tech.name}
              </h3>
              <p className="font-mono text-[10px] text-[rgba(248,250,252,0.35)] uppercase tracking-wider">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
