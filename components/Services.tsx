'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code2, 
  Cpu, 
  Rocket,
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
  Award
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Pixel-perfect, responsive websites and web apps built with React, Next.js, and modern frameworks. Performance-first, SEO-optimized, and scalable.',
    icon: Globe,
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    tag: 'POPULAR',
    tagType: 'popular',
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with React Native and Flutter. Native performance, beautiful UI, and seamless user experiences.',
    icon: Smartphone,
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    tag: null,
    tagType: null,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that converts. Wireframes, prototypes, and high-fidelity designs that balance aesthetics with usability.',
    icon: Palette,
    color: '#FF8A3D',
    gradient: 'from-orange-500 to-yellow-500',
    bgGradient: 'from-orange-500/10 to-yellow-500/10',
    tag: 'TRENDING',
    tagType: 'trending',
  },
  {
    id: 4,
    title: 'Software Solutions',
    description: 'Custom enterprise software, APIs, and backend systems. Robust architecture, clean code, and scalable infrastructure.',
    icon: Code2,
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    tag: null,
    tagType: null,
  },
  {
    id: 5,
    title: 'AI & Automation',
    description: 'Intelligent solutions powered by AI and machine learning. Chatbots, automation workflows, and data-driven decision systems.',
    icon: Cpu,
    color: '#EC4899',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    tag: 'NEW',
    tagType: 'new',
  },
  {
    id: 6,
    title: 'Digital Transformation',
    description: 'End-to-end digital strategy and implementation. From legacy system modernization to complete digital ecosystem redesign.',
    icon: Rocket,
    color: '#3B82F6',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    tag: null,
    tagType: null,
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0d0d0d] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
        
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

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
          >
            Services Built For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Digital Age</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-white/50 max-w-2xl"
          >
            We deliver cutting-edge solutions that help businesses thrive in the digital landscape.
          </motion.p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id
            const Icon = service.icon
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <motion.div
                  animate={{
                    scale: isHovered ? 1.03 : 1,
                    y: isHovered ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`
                    relative p-8 rounded-2xl border transition-all duration-500
                    ${isHovered 
                      ? `bg-gradient-to-br ${service.bgGradient} border-${service.color}/30 shadow-2xl` 
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                    }
                  `}
                  style={{
                    boxShadow: isHovered ? `0 20px 60px ${service.color}20` : 'none',
                  }}
                >
                  {/* Glow Effect */}
                  {isHovered && (
                    <div 
                      className="absolute -inset-1 rounded-2xl blur-2xl opacity-30"
                      style={{ background: service.color }}
                    />
                  )}

                  <div className="relative">
                    {/* Badge */}
                    {service.tag && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`
                          absolute top-4 right-4 font-space text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full
                          ${service.tagType === 'popular'
                            ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black'
                            : service.tagType === 'trending'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black'
                            : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                          }
                        `}
                      >
                        {service.tag}
                      </motion.span>
                    )}

                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`
                        w-14 h-14 rounded-xl flex items-center justify-center mb-5
                        ${isHovered 
                          ? `bg-gradient-to-r ${service.gradient} shadow-lg` 
                          : 'bg-white/5 border border-white/10'
                        }
                        transition-all duration-300
                      `}
                      style={{ 
                        boxShadow: isHovered ? `0 10px 30px ${service.color}40` : 'none'
                      }}
                    >
                      <Icon className={`w-7 h-7 ${isHovered ? 'text-black' : 'text-white/60'} transition-colors duration-300`} />
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="font-space font-bold text-xl text-white mb-3"
                      animate={{ color: isHovered ? service.color : '#FFFFFF' }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="font-inter text-sm text-white/40 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      animate={{
                        x: isHovered ? 5 : 0,
                        opacity: isHovered ? 1 : 0.6,
                      }}
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: isHovered ? service.color : 'rgba(255,255,255,0.4)' }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                    </motion.div>

                    {/* Bottom Accent Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
                      style={{ background: service.color }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-white/60 text-sm">100% Satisfaction Guaranteed</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-white/60 text-sm">40+ Happy Clients</span>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black text-sm flex items-center gap-2"
            >
              View All Services
              <Zap className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}