'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { 
  Globe,
  Code, 
  Users, 
  Cpu, 
  Star,
  Sparkles,
  Trophy,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react'

const stats = [
  { 
    value: 3, 
    suffix: '+', 
    label: 'Core Team Members',
    icon: Users,
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-500',
  },
  { 
    value: 10, 
    suffix: '+', 
    label: 'Technologies Mastered',
    icon: Cpu,
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-500',
  },
  { 
    value: 100, 
    suffix: '%', 
    label: 'Client Satisfaction',
    icon: Star,
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-500',
  },
  { 
    value: 1, 
    suffix: '', 
    label: 'Global Focus',
    icon: Globe,
    color: '#FF8A3D',
    gradient: 'from-orange-500 to-yellow-500',
  },
]

// Advanced CountUp with Curve
function CountUp({ end, suffix, duration = 2000, delay = 0 }: { 
  end: number; 
  suffix: string; 
  duration?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    const delayTimeout = setTimeout(() => setIsStarted(true), delay)
    return () => clearTimeout(delayTimeout)
  }, [delay])

  useEffect(() => {
    if (!isStarted) return

    let startTime: number
    let animationId: number

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      // Cubic ease-out for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [end, duration, isStarted])

  return (
    <span className="relative">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {count}{suffix}
      </motion.span>
    </span>
  )
}

// Sparkle Effect Component
const SparkleEffect = ({ color }: { color: string }) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()
    const interval = setInterval(generateSparkles, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
          }}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            background: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      ))}
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0d0d0d] overflow-hidden border-y border-cyan-500/5">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
              }}
              animate={{
                x: [null, (Math.random() - 0.5) * 200],
                y: [null, (Math.random() - 0.5) * 200],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-1 h-1 rounded-full bg-cyan-500/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            <Trophy className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Our Impact</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            By the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Numbers</span>
          </h2>
          <p className="font-inter text-base text-white/40 mt-2">
            We measure our success by the success we bring to our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className={`
                  relative p-8 rounded-2xl border transition-all duration-500
                  ${isEven 
                    ? 'bg-white/5 border-white/5 hover:border-cyan-500/20' 
                    : 'bg-white/5 border-white/5 hover:border-purple-500/20'
                  }
                  hover:shadow-2xl
                `}
                style={{
                  boxShadow: isEven 
                    ? '0 10px 40px rgba(6,182,212,0.05)'
                    : '0 10px 40px rgba(139,92,246,0.05)',
                }}
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(circle at 50% 50%, ${stat.color}40, transparent 70%)` 
                    }}
                  />

                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon with Circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      className={`
                        w-16 h-16 rounded-full flex items-center justify-center mb-4
                        bg-gradient-to-r ${stat.gradient}
                        transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg
                      `}
                      style={{
                        boxShadow: `0 10px 30px ${stat.color}30`,
                      }}
                    >
                      <Icon className="w-8 h-8 text-black" />
                    </motion.div>

                    {/* Count */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-2"
                      style={{ color: stat.color }}
                    >
                      {isInView && (
                        <CountUp 
                          end={stat.value} 
                          suffix={stat.suffix} 
                          delay={index * 300}
                        />
                      )}
                    </motion.div>

                    {/* Label */}
                    <p className="font-space text-xs font-medium uppercase tracking-[0.1em] text-white/40">
                      {stat.label}
                    </p>

                    {/* Decorative Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                      className="mt-4 w-12 h-0.5 rounded-full"
                      style={{ background: stat.color }}
                    />
                  </div>

                  {/* Sparkle Effect */}
                  <SparkleEffect color={stat.color} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Trophy className="w-5 h-5 text-cyan-400" />
            <span className="text-white/60 text-sm">Engineering-first approach</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span className="text-white/60 text-sm">Scalable & future-ready</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-white/60 text-sm">AI-ready development</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}