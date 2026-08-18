'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Technologies Mastered' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

function CountUp({ end, suffix, duration = 1500 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationId: number

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 bg-[rgba(6,182,212,0.04)] border-t border-b border-[rgba(6,182,212,0.15)]">
      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-ideon-orange mb-4" />
              <div className="font-syne font-extrabold text-clamp-hero text-ideon-white leading-none mb-2">
                {isInView && <CountUp end={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="font-space text-xs font-medium uppercase tracking-[0.1em] text-[rgba(248,250,252,0.40)]">
                {stat.label}
              </p>
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[rgba(248,250,252,0.07)]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
