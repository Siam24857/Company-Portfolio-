'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Sparkles, 
  Rocket, 
  Target, 
  Users, 
  ArrowRight, 
  Shield, 
  Zap, 
  Trophy, 
  Code 
} from 'lucide-react'

const values = [
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative problem-solving to deliver solutions that set new industry standards.',
    icon: Sparkles,
    color: '#06B6D4',
  },
  {
    title: 'Excellence',
    description: 'Every line of code, every pixel, and every interaction is crafted with meticulous attention to detail and quality.',
    icon: Trophy,
    color: '#8B5CF6',
  },
  {
    title: 'Partnership',
    description: 'We build lasting relationships with our clients, becoming an extension of their team to achieve shared success.',
    icon: Users,
    color: '#FF8A3D',
  },
  {
    title: 'Integrity',
    description: 'Transparent communication, honest timelines, and ethical practices form the foundation of everything we do.',
    icon: Shield,
    color: '#10B981',
  },
]

const stats = [
  { label: 'Projects Delivered', value: '500+', icon: Code },
  { label: 'Happy Clients', value: '200+', icon: Users },
  { label: 'Years Experience', value: '15+', icon: Zap },
  { label: 'Global Reach', value: '30+', icon: Rocket },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Grid Pattern - Fixed version */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
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

      <div ref={ref} className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs text-cyan-400 uppercase tracking-wider">About IDEON</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IDEON</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A premium technology company specializing in web development, mobile applications, AI solutions, and digital transformation.
          </p>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg text-center group hover:bg-white/10 transition-all">
              <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Mission & Vision */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg group hover:border-cyan-500/30 transition-all"
            >
              <Target className="w-6 h-6 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-2">Our Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To deliver exceptional digital solutions that transform businesses and create meaningful impact in the digital landscape.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg group hover:border-purple-500/30 transition-all"
            >
              <Rocket className="w-6 h-6 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-2">Our Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To be the leading technology partner for businesses worldwide, recognized for innovation, quality, and transformative digital solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg"
            >
              <p className="text-gray-400 text-sm leading-relaxed">
                From startups to enterprises, we partner with ambitious organizations ready to embrace digital innovation and transform their digital presence.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Core Values */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/20" />
              <h3 className="font-bold text-lg whitespace-nowrap">Core Values</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/20" />
            </div>

            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon
                
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1" style={{ color: value.color }}>
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8"
            >
              <button className="group w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-black text-sm uppercase tracking-wider hover:scale-[1.02] transition-transform">
                <span className="flex items-center justify-center gap-2">
                  Learn More About Our Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}