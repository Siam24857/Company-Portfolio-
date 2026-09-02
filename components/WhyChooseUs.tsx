'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  CheckCircle2, 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users,
  Sparkles,
  Rocket,
  Award,
  Heart,
  Star,
  ArrowRight
} from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Innovative Approach',
    description: 'We stay ahead of technology trends, bringing fresh perspectives and modern solutions to every project.',
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    size: 'col-span-1',
  },
  {
    icon: Shield,
    title: 'High Quality',
    description: 'Rigorous testing, code reviews, and quality assurance ensure every deliverable meets the highest standards.',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    size: 'col-span-1',
  },
  {
    icon: TrendingUp,
    title: 'Modern Technology',
    description: 'We use the latest frameworks, tools, and best practices to build future-proof digital solutions.',
    color: '#FF8A3D',
    gradient: 'from-orange-500 to-yellow-500',
    bgGradient: 'from-orange-500/10 to-yellow-500/10',
    size: 'col-span-1',
  },
  {
    icon: Clock,
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow with your business, handling increased load and complexity seamlessly.',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    size: 'col-span-1 md:col-span-2',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your vision drives our work. We maintain transparent communication and collaborative partnerships.',
    color: '#3B82F6',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    size: 'col-span-1',
  },
  {
    icon: CheckCircle2,
    title: 'Proven Track Record',
    description: '50+ successful projects, 30+ happy clients, and a 99% satisfaction rate speak for themselves.',
    color: '#EC4899',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    size: 'col-span-1',
  },
]

// Particle System
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
    }> = []
    
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.05,
      })
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`
        ctx.fill()
      })
      
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            const opacity = 0.05 * (1 - distance / 120)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0d0d0d] overflow-hidden">
      {/* Particle Background */}
      <ParticleField />
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Why IDEON</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IDEON</span> Difference
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-white/50 max-w-2xl mx-auto"
          >
            We don't just build projects — we build partnerships. Here's what sets us apart.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isHovered = hoveredIndex === index
            const isLarge = reason.size.includes('md:col-span-2')
            
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`${reason.size} group relative ${isLarge ? 'lg:col-span-2' : ''}`}
              >
                <motion.div
                  animate={{
                    scale: isHovered ? 1.03 : 1,
                    y: isHovered ? -5 : 0,
                    rotateX: mousePosition.y * 0.01,
                    rotateY: mousePosition.x * 0.01,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`
                    relative p-8 rounded-2xl border transition-all duration-500 h-full
                    ${isHovered 
                      ? `bg-gradient-to-br ${reason.bgGradient} border-${reason.color}/30 shadow-2xl` 
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                    }
                  `}
                  style={{
                    boxShadow: isHovered ? `0 20px 60px ${reason.color}20` : 'none',
                  }}
                >
                  {/* Glow Effect */}
                  {isHovered && (
                    <div 
                      className="absolute -inset-1 rounded-2xl blur-2xl opacity-30"
                      style={{ background: reason.color }}
                    />
                  )}

                  <div className="relative">
                    {/* Icon Container */}
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`
                        w-14 h-14 rounded-xl flex items-center justify-center mb-5
                        ${isHovered 
                          ? `bg-gradient-to-r ${reason.gradient} shadow-lg` 
                          : 'bg-white/5 border border-white/10'
                        }
                        transition-all duration-300
                      `}
                      style={{ 
                        boxShadow: isHovered ? `0 10px 30px ${reason.color}40` : 'none'
                      }}
                    >
                      <Icon className={`w-7 h-7 ${isHovered ? 'text-black' : 'text-white/60'} transition-colors duration-300`} />
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="font-space font-bold text-xl text-white mb-3"
                      animate={{ color: isHovered ? reason.color : '#FFFFFF' }}
                    >
                      {reason.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="font-inter text-sm text-white/40 leading-relaxed">
                      {reason.description}
                    </p>

                    {/* Hover Arrow */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mt-4 flex items-center gap-2 text-sm font-medium"
                        style={{ color: reason.color }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    )}

                    {/* Bottom Accent Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
                      style={{ background: reason.color }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-white/60 text-sm">50+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-white/60 text-sm">30+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white/60 text-sm">99% Satisfaction Rate</span>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black text-sm flex items-center gap-2"
          >
            Work With Us
            <Rocket className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}