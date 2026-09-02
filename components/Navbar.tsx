'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X, Sparkles, Rocket, Zap, Code } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

// Magnetic Hover Component
const MagneticLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      x.set(distanceX * 0.3)
      y.set(distanceY * 0.3)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      
      // Update active section
      const sections = navLinks.map(link => link.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(10,14,23,0.95)] backdrop-blur-2xl border-b border-cyan-500/10 shadow-2xl shadow-cyan-500/5'
            : 'bg-transparent'
        }`}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500"
            style={{ opacity: scrolled ? 1 : 0 }}
          />
        </div>

        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo with 3D Tilt */}
            <MagneticLink
              href="#home"
              className="group relative font-syne font-extrabold text-2xl text-white transition-all duration-300"
            >
              <span className="relative z-10">
                IDEON
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">.</span>
              </span>
              <motion.span
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500" />
            </MagneticLink>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <MagneticLink
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 font-space text-xs font-semibold uppercase tracking-[0.08em] text-white/50 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/20"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-8 ${isActive ? 'w-8' : ''}`} />
                  </MagneticLink>
                )
              })}
            </div>

            {/* CTA Button with Glow */}
            <div className="hidden lg:block">
              <MagneticLink
                href="#contact"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-space font-semibold text-sm text-black overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  START A PROJECT
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </MagneticLink>
            </div>

            {/* Mobile Hamburger with Animation */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={mobileOpen ? 'open' : 'closed'}
                className="flex flex-col gap-1.5"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: 45, y: 6, opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 bg-white origin-center group-hover:bg-cyan-400 transition-colors"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1, scale: 1 },
                    open: { opacity: 0, scale: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 bg-white origin-center group-hover:bg-cyan-400 transition-colors"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: -45, y: -6, opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 bg-white origin-center group-hover:bg-cyan-400 transition-colors"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Advanced Animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99] bg-gradient-to-br from-black via-[#0a0a0a] to-[#0d0d0d] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            <nav className="flex flex-col items-center gap-6 relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ 
                    delay: index * 0.06, 
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="group relative font-syne font-bold text-4xl sm:text-5xl text-white/80 hover:text-white transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    x: 10,
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  <motion.span
                    className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-space font-bold text-sm uppercase tracking-[0.08em] text-black overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  START A PROJECT
                  <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </motion.a>

              {/* Social Links in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 mt-8"
              >
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social, i) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <span className="text-xs font-mono">{social[0]}</span>
                  </motion.a>
                ))}
              </motion.div>
            </nav>

            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}