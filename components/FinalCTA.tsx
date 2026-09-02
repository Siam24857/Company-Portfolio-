'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Rocket, Send, PartyPopper, Star, Zap } from 'lucide-react'

// Particle System Component
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
      pulse: number
    }> = []
    
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      })
    }
    
    let time = 0
    
    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        
        const alpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse))
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`
        ctx.fill()
        
        // Glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4)
        gradient.addColorStop(0, `rgba(6, 182, 212, ${alpha * 0.2})`)
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2)
        ctx.fill()
      })
      
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 180) {
            const opacity = 0.15 * (1 - distance / 180)
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

// Typewriter Text Effect
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, index + 1))
        index++
        
        if (index >= text.length) {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, 50)
      
      return () => clearInterval(interval)
    }, delay)
    
    return () => clearTimeout(timeout)
  }, [text, delay])
  
  return (
    <span>
      {displayed}
      {!isComplete && (
        <span className="inline-block w-0.5 h-8 bg-cyan-400 animate-blink ml-1" />
      )}
    </span>
  )
}

// Floating Icons Component
const FloatingIcons = () => {
  const icons = [
    { Icon: Sparkles, delay: 0, position: 'top-10 left-10', size: 40 },
    { Icon: Rocket, delay: 1, position: 'top-20 right-20', size: 50 },
    { Icon: Zap, delay: 2, position: 'bottom-20 left-20', size: 35 },
    { Icon: Star, delay: 3, position: 'bottom-10 right-10', size: 45 },
    { Icon: Send, delay: 0.5, position: 'top-1/3 left-5', size: 30 },
    { Icon: PartyPopper, delay: 1.5, position: 'bottom-1/3 right-5', size: 35 },
  ]
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, delay, position, size }) => (
        <motion.div
          key={position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.15, 
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            opacity: { delay: 0.5 + delay, duration: 0.8 },
            scale: { delay: 0.5 + delay, duration: 0.8 },
            y: { delay, duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { delay, duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          className={`absolute ${position}`}
          style={{ color: '#06B6D4' }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  )
}

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-br from-black via-[#0a0a0a] to-[#0d0d0d] overflow-hidden">
      {/* Particle Background */}
      <ParticleField />
      
      {/* Floating Icons */}
      <FloatingIcons />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x * 0.1}px), calc(-50% + ${mousePosition.y * 0.1}px))`,
          }}
        />
      </div>

      {/* Main Content */}
      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        <div className="text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2.5 mb-8 group hover:border-cyan-500/50 transition-all duration-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <span className="font-space text-[11px] font-semibold tracking-[0.12em] uppercase bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              LET'S BUILD TOGETHER
            </span>
          </motion.div>

          {/* Main Headline with 3D Parallax */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 leading-tight"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          >
            Have An Idea?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-10 leading-tight"
            style={{
              transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
              <TypewriterText text="Let's Build It Together." delay={500} />
            </span>
          </motion.h2>

          {/* Description with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10 group hover:border-cyan-500/30 transition-all duration-300">
              <p className="font-inter text-base sm:text-lg text-white/70 leading-relaxed">
                Ready to transform your vision into reality? Let's discuss your project and explore how we can help you achieve your digital goals.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons with Advanced Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                START A PROJECT
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:rotate-[-10deg] transition-all duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="#projects"
              className="group px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-bold text-white text-base transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                VIEW OUR WORK
                <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/40"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['#06B6D4', '#3B82F6', '#8B5CF6'].map((color, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="w-8 h-8 rounded-full border-2 border-black"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-sm">Trusted by 40+ companies</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Star className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
              </motion.div>
              <span className="text-sm">4.9/5 average rating</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Rocket className="w-4 h-4 text-purple-400" />
              </motion.div>
              <span className="text-sm">12+ countries served</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
      />
    </section>
  )
}