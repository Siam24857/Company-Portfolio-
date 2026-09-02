'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Award, Users, Heart } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: 'IDEON transformed our outdated website into a modern, high-performing platform. Our conversion rate increased by 40% within the first month.',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVista Inc',
    avatarColor: '#06B6D4',
    gradient: 'from-cyan-400 to-blue-400',
  },
  {
    id: 2,
    quote: 'The team delivered our mobile app ahead of schedule with exceptional quality. Their attention to detail and technical expertise is unmatched.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'CloudBase Solutions',
    avatarColor: '#3B82F6',
    gradient: 'from-blue-400 to-indigo-400',
  },
  {
    id: 3,
    quote: 'Working with IDEON on our AI integration was seamless. They understood our vision and delivered a solution that exceeded our expectations.',
    author: 'Emily Rodriguez',
    role: 'Product Director',
    company: 'DataFlow Systems',
    avatarColor: '#8B5CF6',
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    id: 4,
    quote: 'The digital transformation IDEON implemented for our company was game-changing. Process efficiency improved by 60% and user satisfaction soared.',
    author: 'David Kim',
    role: 'VP of Operations',
    company: 'EnterpriseHub',
    avatarColor: '#FF8A3D',
    gradient: 'from-orange-400 to-red-400',
  },
  {
    id: 5,
    quote: "IDEON's team became an extension of our own. Their proactive approach and technical excellence made them our go-to technology partner.",
    author: 'Lisa Wang',
    role: 'Founder',
    company: 'StartupX',
    avatarColor: '#06B6D4',
    gradient: 'from-cyan-400 to-emerald-400',
  },
  {
    id: 6,
    quote: 'From concept to launch, IDEON demonstrated professionalism and innovation. Our new platform has received incredible feedback from users.',
    author: 'James Miller',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    avatarColor: '#3B82F6',
    gradient: 'from-blue-400 to-purple-400',
  },
]

// Floating Particle Component
const FloatingParticle = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: 0 }}
          animate={{
            y: [`${p.y}%`, `${p.y - 30}%`, `${p.y}%`],
            x: [`${p.x}%`, `${p.x + 20}%`, `${p.x}%`],
            opacity: [0, p.opacity, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: p.size,
            height: p.size,
            boxShadow: `0 0 10px rgba(6, 182, 212, 0.3)`,
          }}
        />
      ))}
    </div>
  )
}

// Rating Stars Component
const RatingStars = ({ rating = 5 }: { rating?: number }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3 + i * 0.05 }}
        >
          <Star 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/10'}`} 
          />
        </motion.div>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 3) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 3 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

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

  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(current + i) % testimonials.length])
    }
    return result
  }

  return (
    <section 
      id="testimonials" 
      className="relative py-28 sm:py-36 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0d0d0d] overflow-hidden"
    >
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
                "linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* Floating Particles */}
      <FloatingParticle />

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
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Client Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Clients Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-white/50 max-w-2xl mx-auto"
          >
            Real feedback from real clients who trusted us with their digital transformation.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-cyan-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-cyan-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getVisibleTestimonials().map((testimonial, index) => {
                  const initials = testimonial.author
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                  
                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.03,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative"
                    >
                      <motion.div
                        style={{
                          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
                        }}
                        className={`
                          relative p-8 rounded-2xl border transition-all duration-300
                          bg-white/5 backdrop-blur-sm border-white/5
                          hover:border-cyan-500/20 hover:shadow-2xl
                          group-hover:shadow-cyan-500/5
                        `}
                      >
                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-cyan-500 to-purple-500" />

                        <div className="relative">
                          {/* Rating Stars */}
                          <div className="mb-4">
                            <RatingStars />
                          </div>

                          {/* Quote Icon */}
                          <Quote className="w-8 h-8 text-cyan-400/30 mb-3" />

                          {/* Quote Text */}
                          <p className="font-inter text-sm text-white/60 leading-relaxed mb-6 italic">
                            "{testimonial.quote}"
                          </p>

                          {/* Author */}
                          <div className="flex items-center gap-3">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold text-black"
                              style={{ background: testimonial.avatarColor }}
                            >
                              {initials}
                            </motion.div>
                            <div>
                              <p className="font-space font-semibold text-sm text-white">
                                {testimonial.author}
                              </p>
                              <p className="font-mono text-[10px] text-white/30 uppercase tracking-wider">
                                {testimonial.role} @ {testimonial.company}
                              </p>
                            </div>
                          </div>

                          {/* Bottom Gradient Line */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                onClick={() => {
                  setDirection(index > current / 3 ? 1 : -1)
                  setCurrent(index * 3)
                }}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${Math.floor(current / 3) === index 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 w-8' 
                    : 'bg-white/20 hover:bg-white/40'
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="text-white/60 text-sm">40+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-white/60 text-sm">4.9/5 Average Rating</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-white/60 text-sm">99% Client Satisfaction</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}