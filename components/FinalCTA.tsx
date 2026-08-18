'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-28 sm:py-36 bg-ideon-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(6,182,212,0.08)] via-transparent to-[rgba(59,130,246,0.08)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] pointer-events-none animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 border border-[rgba(6,182,212,0.4)] bg-[rgba(6,182,212,0.08)] rounded-full px-4 py-1.5 mb-8"
          >
            <span className="text-ideon-cyan font-space text-[11px] font-semibold tracking-[0.12em] uppercase">
              LET'S BUILD TOGETHER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-extrabold text-clamp-hero text-ideon-white mb-6 leading-tight-custom"
          >
            Have An Idea?
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-extrabold text-clamp-hero gradient-text mb-10 leading-tight-custom"
          >
            Let's Build It Together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="font-inter text-base sm:text-lg text-[rgba(248,250,252,0.55)] max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Ready to transform your vision into reality? Let's discuss your project and explore how we can help you achieve your digital goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="btn-primary text-base inline-flex items-center gap-2"
              data-magnetic
            >
              START A PROJECT <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
