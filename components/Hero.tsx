'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight, Star } from 'lucide-react'

const ScrambleText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0
      const interval = setInterval(() => {
        setDisplayed(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) return text[index]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')
        )

        if (iteration >= text.length) {
          clearInterval(interval)
          setIsComplete(true)
        }
        iteration += 1 / 3
      }, 30)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay])

  return <span>{displayed}</span>
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-ideon-black"
    >
      {/* Background image is now in layout.tsx as fixed body background */}

      {/* Subtle gradient accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 70% 30%, rgba(6,182,212,0.10) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 70%, rgba(59,130,246,0.06) 0%, transparent 60%)
          `,
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 pt-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[65%]">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-[rgba(6,182,212,0.4)] bg-[rgba(6,182,212,0.08)] rounded-full px-4 py-1.5 mb-8"
            >
              <span className="text-ideon-cyan font-space text-[11px] font-semibold tracking-[0.12em] uppercase">
                Digital Innovation • Technology • Creativity
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2 mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne font-extrabold text-clamp-hero leading-tight-custom text-ideon-white"
              >
                We Build Digital
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne font-extrabold text-clamp-hero leading-tight-custom gradient-text"
              >
                Experiences
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne font-extrabold text-clamp-hero leading-tight-custom text-ideon-white relative inline-block"
              >
                That Move Businesses Forward.
                <span className="absolute -bottom-2 left-0 w-24 h-[3px] bg-ideon-orange" />
              </motion.h1>
            </div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.7 }}
              className="font-inter text-base sm:text-lg text-[rgba(248,250,252,0.55)] max-w-lg mb-10 leading-relaxed"
            >
              IDEON is a premium technology company specializing in web development, mobile apps, AI solutions, and digital transformation. We turn bold ideas into powerful digital reality.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <a
                href="#contact"
                className="btn-primary text-base"
                data-magnetic
              >
                START A PROJECT <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#projects"
                className="btn-secondary text-base"
                data-magnetic
              >
                EXPLORE OUR WORK
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.9 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center -space-x-3">
                {['#06B6D4', '#3B82F6', '#8B5CF6', 'rgba(255,138,61,0.6)', 'rgba(248,250,252,0.2)'].map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-ideon-black"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-ideon-orange fill-ideon-orange" />
                  <Star className="w-4 h-4 text-ideon-orange fill-ideon-orange" />
                  <Star className="w-4 h-4 text-ideon-orange fill-ideon-orange" />
                  <Star className="w-4 h-4 text-ideon-orange fill-ideon-orange" />
                  <Star className="w-4 h-4 text-ideon-orange fill-ideon-orange" />
                </div>
                <span className="font-mono text-xs text-[rgba(248,250,252,0.55)]">
                  Trusted by 40+ clients across 12 countries
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Decorative - Desktop Only */}
          <div className="hidden lg:block w-[35%] relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Single large company image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <img
                  src="/Companypicter.jpg"
                  alt="IDEON Company"
                  className="w-72 h-72 object-cover"
                  style={{ 
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    opacity: 0.85,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ideon-cyan/20 to-ideon-blue/20" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
