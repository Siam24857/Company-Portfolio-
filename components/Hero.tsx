'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight, Star, Sparkles, Zap, Code, Rocket, ChevronDown } from 'lucide-react'

// Particle System Component
const ParticleBackground = () => {
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
    
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1,
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
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 150)})`
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

// Water Ripple Effect Component
const WaterRipple = () => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; radius: number; alpha: number }>>([])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRipples(prev => {
        const newRipple = {
          x: Math.random() * 100,
          y: Math.random() * 100,
          radius: 0,
          alpha: 0.6,
        }
        const updated = [...prev, newRipple]
        return updated.slice(-8)
      })
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    const animateRipples = () => {
      setRipples(prev => 
        prev.map(r => ({
          ...r,
          radius: r.radius + 0.5,
          alpha: r.alpha - 0.005,
        })).filter(r => r.alpha > 0)
      )
      requestAnimationFrame(animateRipples)
    }
    
    animateRipples()
  }, [])
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {ripples.map((ripple, index) => (
        <div
          key={index}
          className="absolute rounded-full border border-cyan-500/30"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            width: ripple.radius * 2,
            height: ripple.radius * 2,
            transform: 'translate(-50%, -50%)',
            opacity: ripple.alpha,
          }}
        />
      ))}
    </div>
  )
}

// Scramble Text Effect
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
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#0d0d0d]"
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Water Ripple Effect */}
      <WaterRipple />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"
          style={{
            transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 text-cyan-500/20"
        >
          <Code size={60} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 left-20 text-purple-500/20"
        >
          <Rocket size={50} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-10 text-orange-500/20"
        >
          <Zap size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/3 left-10 text-cyan-500/20"
        >
          <Sparkles size={45} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 pt-20 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[65%]">
            {/* Eyebrow Badge with Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full px-5 py-2 mb-8 group hover:border-cyan-500/50 transition-all duration-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-space text-[11px] font-semibold tracking-[0.12em] uppercase bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Digital Innovation • Technology • Creativity
              </span>
            </motion.div>

            {/* Main Headline with 3D Parallax */}
            <div className="space-y-2 mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                }}
              >
                We Build Digital
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight"
                style={{
                  transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Experiences
                </span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white relative inline-block"
                style={{
                  transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                }}
              >
                That Move Businesses Forward.
                <motion.span 
                  className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </motion.h1>
            </div>

            {/* Sub-text with Scramble Effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.7 }}
              className="font-inter text-base sm:text-lg text-white/60 max-w-lg mb-10 leading-relaxed"
            >
              <ScrambleText text="IDEON is a premium technology company specializing in web development, mobile apps, AI solutions, and digital transformation. We turn bold ideas into powerful digital reality." delay={1000} />
            </motion.p>

            {/* CTA Row with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  START A PROJECT
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </motion.a>
              <motion.a
                href="#projects"
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-bold text-white text-base transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE OUR WORK
              </motion.a>
            </motion.div>

            {/* Social Proof with Animated Stars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.9 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center -space-x-3">
                {['#06B6D4', '#3B82F6', '#8B5CF6', 'rgba(255,138,61,0.6)', 'rgba(248,250,252,0.2)'].map((color, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="w-10 h-10 rounded-full border-2 border-black"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="font-mono text-xs text-white/50">
                  Trusted by 40+ clients across 12 countries
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Decorative - Desktop Only with 3D Rotation */}
          <div className="hidden lg:block w-[35%] relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                className="relative"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg)`,
                }}
              >
                <div className="relative group">
                  {/* Glow behind image */}
                  <div className="absolute -inset-20 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image with clipping and border glow */}
                  <div className="relative">
                    <img
                      src="/Companypicter.jpg"
                      alt="IDEON Company"
                      className="w-72 h-72 object-cover transition-all duration-300 group-hover:scale-105"
                      style={{ 
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    />
                    <div 
                      className="absolute inset-0 transition-all duration-300 group-hover:opacity-0"
                      style={{ 
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(139,92,246,0.3))',
                      }} 
                    />
                    
                    {/* Animated border */}
                    <div 
                      className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        background: 'conic-gradient(from 0deg, transparent, cyan, purple, transparent)',
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                      }}
                    />
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-8 -right-8 bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full shadow-lg shadow-cyan-500/25"
                  >
                    <span className="font-bold text-black text-xs">✦ Premium</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute -bottom-4 -left-8 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
                  >
                    <span className="text-white text-xs">⭐ 4.9/5</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}