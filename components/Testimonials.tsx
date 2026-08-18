'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: 'IDEON transformed our outdated website into a modern, high-performing platform. Our conversion rate increased by 40% within the first month.',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVista Inc',
    avatarColor: '#06B6D4',
  },
  {
    id: 2,
    quote: 'The team delivered our mobile app ahead of schedule with exceptional quality. Their attention to detail and technical expertise is unmatched.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'CloudBase Solutions',
    avatarColor: '#3B82F6',
  },
  {
    id: 3,
    quote: 'Working with IDEON on our AI integration was seamless. They understood our vision and delivered a solution that exceeded our expectations.',
    author: 'Emily Rodriguez',
    role: 'Product Director',
    company: 'DataFlow Systems',
    avatarColor: '#8B5CF6',
  },
  {
    id: 4,
    quote: 'The digital transformation IDEON implemented for our company was game-changing. Process efficiency improved by 60% and user satisfaction soared.',
    author: 'David Kim',
    role: 'VP of Operations',
    company: 'EnterpriseHub',
    avatarColor: '#FF8A3D',
  },
  {
    id: 5,
    quote: 'IDEON\'s team became an extension of our own. Their proactive approach and technical excellence made them our go-to technology partner.',
    author: 'Lisa Wang',
    role: 'Founder',
    company: 'StartupX',
    avatarColor: '#06B6D4',
  },
  {
    id: 6,
    quote: 'From concept to launch, IDEON demonstrated professionalism and innovation. Our new platform has received incredible feedback from users.',
    author: 'James Miller',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    avatarColor: '#3B82F6',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section id="testimonials" className="py-28 sm:py-36 bg-ideon-navy">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">CLIENT STORIES</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[0, 1, 2].map((offset) => {
                const idx = (current + offset) % testimonials.length
                const t = testimonials[idx]
                return (
                  <div
                    key={t.id}
                    className="glass-card p-8 no-border-radius relative transition-all duration-300 hover:border-ideon-cyan"
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-ideon-orange fill-ideon-orange" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6">
                      <span className="font-syne font-extrabold text-[80px] leading-none text-[rgba(6,182,212,0.15)] absolute -top-4 -left-2">
                        "
                      </span>
                      <p className="font-inter text-base text-[rgba(248,250,252,0.60)] italic leading-relaxed relative z-10">
                        {t.quote}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-ideon-black"
                        style={{ backgroundColor: t.avatarColor }}
                      >
                        {t.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-space font-semibold text-sm text-ideon-white">{t.author}</p>
                        <p className="font-mono text-xs text-[rgba(248,250,252,0.35)]">
                          {t.role} @ {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-ideon-orange w-2 h-2'
                  : 'border border-[rgba(248,250,252,0.20)] bg-transparent'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
