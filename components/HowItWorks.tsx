'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  CheckCircle2, 
  Search, 
  Target, 
  Palette, 
  Code, 
  Shield, 
  Rocket,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business, goals, audience, and requirements to understand the full scope of your project.',
    icon: Search,
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We craft a comprehensive digital strategy aligned with your business objectives and market positioning.',
    icon: Target,
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our designers create stunning, user-centric interfaces that balance aesthetics with functionality.',
    icon: Palette,
    color: '#FF8A3D',
    gradient: 'from-orange-500 to-yellow-500',
    bgGradient: 'from-orange-500/10 to-yellow-500/10',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Our engineers bring designs to life with clean, efficient, and scalable code using modern technologies.',
    icon: Code,
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    number: '05',
    title: 'Test',
    description: 'Rigorous testing ensures flawless performance across all devices, browsers, and user scenarios.',
    icon: Shield,
    color: '#3B82F6',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'We deploy your solution, monitor performance, and provide ongoing support for sustained success.',
    icon: Rocket,
    color: '#EC4899',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0d0d0d] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Our Process</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
          >
            From Concept To Launch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-white/50 max-w-2xl mx-auto"
          >
            Our proven 6-step process ensures your vision becomes a reality with precision and excellence.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-[30px] left-0 right-0 h-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-white/5" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
              initial={{ x: '-100%' }}
              animate={{ x: activeStep / (steps.length - 1) * 100 - 100 + '%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const isActive = index <= activeStep
              const isHovered = hoveredStep === index
              const Icon = step.icon
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative group"
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                      y: isHovered ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`
                      relative p-6 rounded-2xl border transition-all duration-500
                      ${isActive 
                        ? `bg-gradient-to-br ${step.bgGradient} border-${step.color}/30` 
                        : 'bg-white/5 border-white/5'
                      }
                      ${isHovered ? 'shadow-2xl' : ''}
                    `}
                    style={{
                      boxShadow: isHovered ? `0 20px 60px ${step.color}20` : 'none',
                    }}
                  >
                    {/* Glow Effect on Hover */}
                    {isHovered && (
                      <div 
                        className="absolute -inset-1 rounded-2xl blur-xl opacity-30"
                        style={{ background: step.color }}
                      />
                    )}

                    <div className="relative flex flex-col items-center text-center">
                      {/* Step Number */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1 : 0.8,
                          rotate: isHovered ? 360 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className={`
                          w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm mb-4
                          ${isActive 
                            ? `bg-gradient-to-r ${step.gradient} text-black` 
                            : 'bg-white/5 text-white/30'
                          }
                          transition-all duration-500
                        `}
                      >
                        {step.number}
                      </motion.div>

                      {/* Icon */}
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.2 : 1,
                          rotate: isHovered ? 10 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`mb-3 transition-colors duration-300 ${
                          isActive ? `text-${step.color}` : 'text-white/20'
                        }`}
                        style={{ color: isActive ? step.color : 'rgba(255,255,255,0.2)' }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="font-space font-bold text-sm text-white mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="font-inter text-xs text-white/40 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl overflow-hidden"
                        style={{ background: step.color }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>

                    {/* Status Badge */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-4 h-4 text-black" />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Connector Arrow (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-2">
                      <ArrowRight className="w-4 h-4 text-white/10 rotate-90" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <span className="text-white/60 text-sm">Ready to start your project?</span>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black text-sm flex items-center gap-2"
            >
              Let's Talk
              <Zap className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}