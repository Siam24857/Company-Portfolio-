'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business, goals, audience, and requirements to understand the full scope of your project.',
    icon: 'search',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We craft a comprehensive digital strategy aligned with your business objectives and market positioning.',
    icon: 'strategy',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our designers create stunning, user-centric interfaces that balance aesthetics with functionality.',
    icon: 'design',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Our engineers bring designs to life with clean, efficient, and scalable code using modern technologies.',
    icon: 'develop',
  },
  {
    number: '05',
    title: 'Test',
    description: 'Rigorous testing ensures flawless performance across all devices, browsers, and user scenarios.',
    icon: 'test',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'We deploy your solution, monitor performance, and provide ongoing support for sustained success.',
    icon: 'launch',
  },
]

const icons: Record<string, JSX.Element> = {
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  strategy: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  design: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  develop: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  test: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  launch: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
}

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section id="process" className="py-28 sm:py-36 bg-ideon-black">
      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-eyebrow">HOW WE WORK</p>
          <h2 className="section-title">From Concept To Launch</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-[18px] left-0 right-0 h-[1.5px] bg-[rgba(248,250,252,0.08)]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const isActive = index <= activeStep
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-sm mb-6 transition-all duration-500 border-2 ${
                      isActive
                        ? 'bg-ideon-orange border-ideon-orange text-ideon-black'
                        : 'border-[rgba(248,250,252,0.15)] text-[rgba(248,250,252,0.40)]'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`mb-4 transition-colors duration-300 ${
                      isActive ? 'text-ideon-cyan' : 'text-[rgba(248,250,252,0.40)]'
                    }`}
                  >
                    {icons[step.icon]}
                  </div>

                  {/* Title */}
                  <h3 className="font-space font-bold text-base text-ideon-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-sm text-[rgba(248,250,252,0.50)] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
