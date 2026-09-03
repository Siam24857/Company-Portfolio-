'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  Send, 
  Mail, 
  Copy, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Zap,
  Rocket
} from 'lucide-react'

type FormData = {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}

// Particle Background Component
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
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.3 + 0.1,
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>()

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

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText('hello@ideon.co')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const watchedFields = watch()

  const inputClasses = (field: string) =>
    `w-full bg-white/5 backdrop-blur-sm border-b-2 py-3.5 px-4 font-inter text-base text-white placeholder:text-transparent focus:outline-none transition-all duration-300 rounded-lg ${
      focusedField === field ? 'border-cyan-500 shadow-lg shadow-cyan-500/10' : 'border-white/10 hover:border-white/20'
    } ${errors[field as keyof FormData] ? 'border-red-500' : ''}`

  const labelClasses = (field: string) =>
    `absolute left-4 font-inter text-sm transition-all duration-300 pointer-events-none ${
      focusedField === field || watchedFields[field as keyof FormData]
        ? '-translate-y-7 scale-75 text-cyan-400'
        : 'top-3.5 text-white/30'
    }`

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0d0d0d] overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Effects */}
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

      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left - Form */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Get In Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-2"
            >
              LET'S START
            </motion.h2>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4"
            >
              YOUR PROJECT.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-base text-white/50 mb-10"
            >
              Tell us about your project. We'll get back to you within 24 hours.
            </motion.p>

            {!submitted ? (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      name="name"
                      className={inputClasses('name')}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label className={labelClasses('name')}>Your Name</label>
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      name="email"
                      className={inputClasses('email')}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label className={labelClasses('email')}>Email Address</label>
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Company & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      {...register('company')}
                      type="text"
                      name="company"
                      className={inputClasses('company')}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label className={labelClasses('company')}>Company (Optional)</label>
                  </div>

                  <div className="relative">
                    <select
                      {...register('projectType', { required: 'Please select a project type' })}
                      name="projectType"
                      className={`${inputClasses('projectType')} appearance-none cursor-pointer`}
                      onFocus={() => setFocusedField('projectType')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" className="bg-[#0a0a0a]">Select project type</option>
                      <option value="web" className="bg-[#0a0a0a]">🌐 Web Development</option>
                      <option value="mobile" className="bg-[#0a0a0a]">📱 Mobile App</option>
                      <option value="ai" className="bg-[#0a0a0a]">🤖 AI & Automation</option>
                      <option value="design" className="bg-[#0a0a0a]">🎨 UI/UX Design</option>
                      <option value="other" className="bg-[#0a0a0a]">🚀 Other</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    name="message"
                    className={`${inputClasses('message')} resize-none`}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <label className={labelClasses('message')}>Tell us about your project</label>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-space font-bold text-base text-black uppercase overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⚡</span>
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </motion.button>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-6 text-white/30 text-xs"
                >
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    No spam, ever
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    24h response
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Rocket className="w-3 h-3 text-purple-400" />
                    Secure & encrypted
                  </span>
                </motion.div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                <h3 className="font-syne font-bold text-2xl text-white mb-2">Message Sent! 🎉</h3>
                <p className="font-inter text-white/50 text-center max-w-sm">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-2/5 relative"
          >
            {/* Floating Card */}
            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <p className="font-inter text-sm text-white/30 mb-6">Or reach us directly:</p>

                {/* Email */}
                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-3 mb-6 w-full hover:bg-white/5 p-3 rounded-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white/40 text-xs">Email</p>
                    <span className="font-space font-semibold text-lg text-cyan-400 group-hover:underline decoration-2 underline-offset-4 transition-all duration-200">
                      hello@ideon.co
                    </span>
                  </div>
                  <Copy className="w-4 h-4 text-white/20 ml-auto group-hover:text-cyan-400 transition-colors duration-300" />
                </button>

                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-inter text-sm text-emerald-400">Copied to clipboard</span>
                  </motion.div>
                )}

                {/* Quick Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span className="text-white/60 text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-white/60 text-sm">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span className="text-white/60 text-sm">Usually replies within 4 hours</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                  {[
                    { Icon: Github, href: '#', label: 'GitHub' },
                    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { Icon: Twitter, href: '#', label: 'Twitter' },
                    { Icon: Dribbble, href: '#', label: 'Dribbble' },
                  ].map(({ Icon, href, label }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 group"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </motion.a>
                  ))}
                </div>

                {/* Status Badge */}
                <div className="mt-6 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="font-space text-xs text-emerald-400">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Animated Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -right-4 text-cyan-500/20"
            >
              <Zap size={60} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}