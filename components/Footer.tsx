'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble, 
  Send, 
  MapPin, 
  Mail, 
  Phone,
  ArrowUpRight,
  Sparkles,
  Heart
} from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Web Development', icon: '⚡' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'AI & Automation', icon: '🤖' },
    { name: 'Digital Transformation', icon: '🚀' },
    { name: 'Software Solutions', icon: '💻' },
  ],
  company: [
    'About IDEON',
    'Our Projects',
    'Technologies',
    'Team',
    'Careers',
    'Blog'
  ],
  contact: [
    { icon: Mail, text: 'hello@ideon.co', href: 'mailto:hello@ideon.co' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
  ]
}

const socialLinks = [
  { Icon: Github, href: '#', color: '#ffffff' },
  { Icon: Linkedin, href: '#', color: '#0A66C2' },
  { Icon: Twitter, href: '#', color: '#1DA1F2' },
  { Icon: Dribbble, href: '#', color: '#EA4C89' },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer ref={ref} className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-[#0d0d0d] pt-20 pb-8 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl border border-cyan-500/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-syne font-bold text-xl text-white mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="font-inter text-sm text-white/40">
                Get the latest updates on our projects and industry insights.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 text-white text-sm transition-all duration-300"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-black text-sm whitespace-nowrap"
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Subscribe
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-syne font-extrabold text-3xl text-white mb-4">
                IDEON
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">.</span>
              </h3>
              <p className="font-inter text-sm text-white/40 max-w-sm leading-relaxed mb-6">
                Building Digital Experiences That Move Businesses Forward. We combine technical expertise with creative thinking to deliver exceptional results.
              </p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  {['#06B6D4', '#3B82F6', '#8B5CF6', '#FF8A3D'].map((color, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="w-8 h-8 rounded-full border-2 border-black"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="font-inter text-xs text-white/30">
                  <Heart className="w-3 h-3 inline text-red-500 fill-red-500" /> by our team
                </span>
              </div>

              {/* Social Links with Animation */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ Icon, href, color }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -2,
                      boxShadow: `0 0 20px ${color}40`,
                    }}
                    className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                    aria-label={`Social link ${i + 1}`}
                  >
                    <Icon className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-space font-semibold text-sm text-cyan-400 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-2 font-inter text-sm text-white/40 hover:text-white transition-all duration-200"
                  >
                    <span className="text-xs">{link.icon}</span>
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-space font-semibold text-sm text-cyan-400 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-2 font-inter text-sm text-white/40 hover:text-white transition-all duration-200"
                  >
                    {link}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-space font-semibold text-sm text-cyan-400 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map(({ icon: Icon, text, href }, i) => (
                <li key={i}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-3 font-inter text-sm text-white/40 hover:text-white transition-all duration-200"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-300">
                      <Icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <span>{text}</span>
                  </motion.a>
                </li>
              ))}
              <li className="font-inter text-sm text-white/30 mt-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                Available for projects worldwide
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <p className="font-mono text-xs text-white/20">
              © 2025 IDEON. All rights reserved.
            </p>
            <span className="text-white/10">|</span>
            <p className="font-mono text-xs text-white/20 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> worldwide
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              whileHover={{ color: '#06B6D4' }}
              className="font-mono text-xs text-white/20 hover:text-cyan-400 transition-colors duration-200"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#06B6D4' }}
              className="font-mono text-xs text-white/20 hover:text-cyan-400 transition-colors duration-200"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#06B6D4' }}
              className="font-mono text-xs text-white/20 hover:text-cyan-400 transition-colors duration-200"
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20 hover:scale-110 transition-transform duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUpRight className="w-5 h-5 text-black" />
        </motion.button>
      </div>
    </footer>
  )
}