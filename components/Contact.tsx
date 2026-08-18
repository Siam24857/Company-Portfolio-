'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, Mail, Copy, CheckCircle2 } from 'lucide-react'

type FormData = {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText('hello@ideon.co')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inputClasses =
    'w-full bg-transparent border-b border-[rgba(248,250,252,0.12)] py-3 font-inter text-base text-ideon-white placeholder:text-[rgba(248,250,252,0.25)] focus:outline-none focus:border-ideon-cyan transition-colors duration-200'

  return (
    <section id="contact" className="py-28 sm:py-36 bg-ideon-black">
      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left - Form */}
          <div className="w-full lg:w-3/5">
            <p className="section-eyebrow">GET IN TOUCH</p>
            <h2 className="font-syne font-extrabold text-clamp-hero text-ideon-white mb-2">
              LET'S START
            </h2>
            <h2 className="font-syne font-extrabold text-clamp-hero text-outlined mb-6">
              YOUR PROJECT.
            </h2>
            <p className="font-inter text-base text-[rgba(248,250,252,0.50)] mb-10">
              Tell us about your project. We'll get back to you within 24 hours.
            </p>

            {!submitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Name */}
                <div className="relative">
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    className={inputClasses}
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 font-inter text-base text-[rgba(248,250,252,0.25)] transition-all duration-200 peer-focus:text-ideon-cyan peer-focus:-translate-y-6 peer-focus:scale-75 pointer-events-none">
                    Your Name
                  </label>
                  {errors.name && <span className="text-ideon-orange text-xs mt-1">Name is required</span>}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    className={inputClasses}
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 font-inter text-base text-[rgba(248,250,252,0.25)] transition-all duration-200 pointer-events-none">
                    Email Address
                  </label>
                  {errors.email && <span className="text-ideon-orange text-xs mt-1">Valid email is required</span>}
                </div>

                {/* Company */}
                <div className="relative">
                  <input
                    {...register('company')}
                    type="text"
                    className={inputClasses}
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 font-inter text-base text-[rgba(248,250,252,0.25)] transition-all duration-200 pointer-events-none">
                    Company (Optional)
                  </label>
                </div>

                {/* Project Type */}
                <div className="relative">
                  <select
                    {...register('projectType', { required: true })}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="" className="bg-ideon-black">Select project type</option>
                    <option value="web" className="bg-ideon-black">Web Development</option>
                    <option value="mobile" className="bg-ideon-black">Mobile App</option>
                    <option value="ai" className="bg-ideon-black">AI & Automation</option>
                    <option value="design" className="bg-ideon-black">UI/UX Design</option>
                    <option value="other" className="bg-ideon-black">Other</option>
                  </select>
                  {errors.projectType && <span className="text-ideon-orange text-xs mt-1">Please select a project type</span>}
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 font-inter text-base text-[rgba(248,250,252,0.25)] transition-all duration-200 pointer-events-none">
                    Tell us about your project
                  </label>
                  {errors.message && <span className="text-ideon-orange text-xs mt-1">Message is required</span>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-ideon-orange text-ideon-black font-space font-bold text-base uppercase py-4 no-border-radius hover:bg-[rgba(255,138,61,0.85)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  data-magnetic
                >
                  SEND MESSAGE <Send className="w-4 h-4" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 py-8"
              >
                <CheckCircle2 className="w-6 h-6 text-ideon-cyan" />
                <p className="font-space font-semibold text-lg text-ideon-cyan">
                  Message sent successfully. We'll be in touch within 24 hours.
                </p>
              </motion.div>
            )}
          </div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-2/5"
          >
            <p className="font-inter text-sm text-[rgba(248,250,252,0.35)] mb-4">
              Or reach us directly:
            </p>

            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 mb-6"
            >
              <Mail className="w-5 h-5 text-ideon-orange" />
              <span className="font-space font-semibold text-2xl text-ideon-orange group-hover:underline decoration-2 underline-offset-4 transition-all duration-200">
                hello@ideon.co
              </span>
            </button>

            <div className="inline-flex items-center gap-2 bg-[rgba(6,182,212,0.08)] border border-[rgba(6,182,212,0.25)] px-4 py-2 no-border-radius">
              <span className="text-ideon-cyan">⚡</span>
              <span className="font-space text-sm text-ideon-cyan">
                Usually replies within 4 hours
              </span>
            </div>

            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 inline-flex items-center gap-2 bg-ideon-black border border-ideon-cyan px-4 py-2 no-border-radius"
              >
                <Copy className="w-4 h-4 text-ideon-cyan" />
                <span className="font-inter text-sm text-ideon-white">Copied to clipboard</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
