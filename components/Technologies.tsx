'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Sparkles, 
  Zap, 
  Code2, 
  Layout, 
  Database, 
  Server, 
  Cloud, 
  Terminal,
  Shield,
  Cpu,
  Rocket,
  GitBranch,
  Layers,
  Workflow,
  Braces
} from 'lucide-react'

const technologies = [
  { 
    name: 'React', 
    category: 'Frontend', 
    icon: <Code2 className="w-8 h-8" />,
    color: '#61DAFB',
    gradient: 'from-cyan-400 to-blue-400',
  },
  { 
    name: 'Next.js', 
    category: 'Framework', 
    icon: <Layout className="w-8 h-8" />,
    color: '#000000',
    gradient: 'from-white to-gray-400',
  },
  { 
    name: 'JavaScript', 
    category: 'Language', 
    icon: <Braces className="w-8 h-8" />,
    color: '#F7DF1E',
    gradient: 'from-yellow-400 to-yellow-600',
  },
  { 
    name: 'TypeScript', 
    category: 'Language', 
    icon: <Terminal className="w-8 h-8" />,
    color: '#3178C6',
    gradient: 'from-blue-400 to-blue-600',
  },
  { 
    name: 'Tailwind CSS', 
    category: 'Styling', 
    icon: <Layout className="w-8 h-8" />,
    color: '#06B6D4',
    gradient: 'from-cyan-400 to-cyan-600',
  },
  { 
    name: 'Node.js', 
    category: 'Backend', 
    icon: <Server className="w-8 h-8" />,
    color: '#339933',
    gradient: 'from-green-400 to-green-600',
  },
  { 
    name: 'MongoDB', 
    category: 'Database', 
    icon: <Database className="w-8 h-8" />,
    color: '#47A248',
    gradient: 'from-emerald-400 to-emerald-600',
  },
  { 
    name: 'PostgreSQL', 
    category: 'Database', 
    icon: <Database className="w-8 h-8" />,
    color: '#336791',
    gradient: 'from-blue-500 to-blue-700',
  },
  { 
    name: 'Git', 
    category: 'Version Control', 
    icon: <GitBranch className="w-8 h-8" />,
    color: '#F05032',
    gradient: 'from-orange-400 to-red-500',
  },
  { 
    name: 'GitHub', 
    category: 'Platform', 
    icon: <Cloud className="w-8 h-8" />,
    color: '#181717',
    gradient: 'from-gray-400 to-gray-600',
  },
  { 
    name: 'Docker', 
    category: 'DevOps', 
    icon: <Layers className="w-8 h-8" />,
    color: '#2496ED',
    gradient: 'from-blue-400 to-blue-600',
  },
  { 
    name: 'AI/ML', 
    category: 'Emerging Tech', 
    icon: <Cpu className="w-8 h-8" />,
    color: '#8B5CF6',
    gradient: 'from-purple-400 to-pink-500',
  },
]

// Floating Particle Effect
const Particle = ({ color }: { color: string }) => {
  const [position] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  })

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      initial={{ 
        x: `${position.x}%`, 
        y: `${position.y}%`,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        y: [`${position.y}%`, `${position.y - 20}%`, `${position.y}%`],
        opacity: [0, 0.3, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: position.duration,
        delay: position.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        width: position.size,
        height: position.size,
        background: color,
        boxShadow: `0 0 10px ${color}`,
      }}
    />
  )
}

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    })
  }

  return (
    <section 
      id="technologies" 
      className="relative py-28 sm:py-36 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0d0d0d] overflow-hidden"
      onMouseMove={handleMouseMove}
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

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <Particle key={i} color={i % 2 === 0 ? '#06B6D4' : '#8B5CF6'} />
        ))}
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
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Tech Stack</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
          >
            Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Master</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-white/50 max-w-2xl mx-auto"
          >
            We leverage modern, proven technologies to build scalable, high-performance solutions.
          </motion.p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => {
            const isHovered = hoveredTech === tech.name
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="group relative"
              >
                <motion.div
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -8 : 0,
                    rotateX: mousePosition.y * 0.02,
                    rotateY: mousePosition.x * 0.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`
                    relative p-6 rounded-2xl border text-center transition-all duration-300
                    ${isHovered 
                      ? `bg-gradient-to-br ${tech.gradient} border-${tech.color}/30 shadow-2xl` 
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                    }
                  `}
                  style={{
                    boxShadow: isHovered ? `0 20px 60px ${tech.color}20` : 'none',
                  }}
                >
                  {/* Glow Effect */}
                  {isHovered && (
                    <div 
                      className="absolute -inset-1 rounded-2xl blur-2xl opacity-30"
                      style={{ background: tech.color }}
                    />
                  )}

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.2 : 1,
                        rotate: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`
                        flex items-center justify-center mb-3 transition-all duration-300
                        ${isHovered ? 'text-black' : 'text-white/60'}
                      `}
                    >
                      {tech.icon}
                    </motion.div>

                    {/* Name */}
                    <motion.h3 
                      className="font-space font-bold text-sm mb-1 transition-colors duration-300"
                      animate={{ color: isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.8)' }}
                    >
                      {tech.name}
                    </motion.h3>

                    {/* Category */}
                    <motion.p
                      className="font-mono text-[10px] uppercase tracking-wider transition-colors duration-300"
                      animate={{ color: isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)' }}
                    >
                      {tech.category}
                    </motion.p>

                    {/* Animated Progress Bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
                      style={{ background: tech.color }}
                    />

                    {/* Category Badge on Hover */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-2 -right-2 px-2 py-1 bg-black/90 backdrop-blur-sm rounded-full border border-white/10"
                      >
                        <span className="text-[8px] font-mono text-white/60 uppercase tracking-wider">
                          {tech.category}
                        </span>
                      </motion.div>
                    )}
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
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-white/60 text-sm">10+ Technologies Mastered</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-3">
              <Rocket className="w-5 h-5 text-purple-400" />
              <span className="text-white/60 text-sm">Always Learning</span>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black text-sm flex items-center gap-2"
            >
              Start Building
              <Zap className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}