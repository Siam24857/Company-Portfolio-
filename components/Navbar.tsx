'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
          scrolled
            ? 'bg-[rgba(10,14,23,0.92)] backdrop-blur-xl border-b border-[rgba(248,250,252,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              className="font-syne font-extrabold text-xl text-ideon-white hover:text-ideon-cyan transition-all duration-300 hover:tracking-[0.05em]"
              data-magnetic
            >
              IDEON
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-space text-xs font-semibold uppercase tracking-[0.08em] text-[rgba(248,250,252,0.55)] hover:text-ideon-white transition-colors duration-200 relative group py-2"
                  data-magnetic
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-ideon-cyan transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="border-[1.5px] border-ideon-orange text-ideon-orange font-space font-semibold text-sm px-5 py-2.5 no-border-radius hover:bg-ideon-orange hover:text-ideon-black transition-all duration-250 inline-block"
                data-magnetic
              >
                START A PROJECT
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-8 h-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={mobileOpen ? 'open' : 'closed'}
                className="flex flex-col gap-1.5"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="block w-6 h-[1.5px] bg-ideon-white origin-center transition-colors"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="block w-6 h-[1.5px] bg-ideon-white transition-colors"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="block w-6 h-[1.5px] bg-ideon-white origin-center transition-colors"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99] bg-ideon-black flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.3 }}
                  className="font-syne font-bold text-4xl text-ideon-white hover:text-ideon-cyan transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="font-space font-semibold text-sm uppercase tracking-[0.08em] border-[1.5px] border-ideon-orange text-ideon-orange px-8 py-4 no-border-radius hover:bg-ideon-orange hover:text-ideon-black transition-all duration-250 mt-4"
              >
                START A PROJECT
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
