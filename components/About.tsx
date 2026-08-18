'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const values = [
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative problem-solving to deliver solutions that set new industry standards.',
  },
  {
    title: 'Excellence',
    description: 'Every line of code, every pixel, and every interaction is crafted with meticulous attention to detail and quality.',
  },
  {
    title: 'Partnership',
    description: 'We build lasting relationships with our clients, becoming an extension of their team to achieve shared success.',
  },
  {
    title: 'Integrity',
    description: 'Transparent communication, honest timelines, and ethical practices form the foundation of everything we do.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 sm:py-36 bg-ideon-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(6,182,212,0.03)] to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="section-eyebrow">WHO WE ARE</p>
            <h2 className="font-syne font-extrabold text-clamp-hero text-ideon-white mb-6 leading-tight-custom">
              We Are IDEON
            </h2>
            <div className="space-y-6">
              <p className="font-inter text-base text-[rgba(248,250,252,0.60)] leading-relaxed">
                IDEON is a premium technology company specializing in web development, mobile applications, AI solutions, and digital transformation. Founded with a vision to bridge the gap between innovative ideas and powerful digital reality.
              </p>
              <p className="font-inter text-base text-[rgba(248,250,252,0.60)] leading-relaxed">
                Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance user experiences, and create lasting digital impact. We combine technical expertise with creative thinking to deliver products that exceed expectations.
              </p>
              <p className="font-inter text-base text-[rgba(248,250,252,0.60)] leading-relaxed">
                From startups to enterprises, we partner with ambitious organizations ready to embrace digital innovation and transform their digital presence.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="glass-card p-6 no-border-radius">
                <h3 className="font-space font-bold text-sm text-ideon-cyan uppercase tracking-wider mb-3">Our Mission</h3>
                <p className="font-inter text-sm text-[rgba(248,250,252,0.60)] leading-relaxed">
                  To deliver exceptional digital solutions that transform businesses and create meaningful impact in the digital landscape.
                </p>
              </div>
              <div className="glass-card p-6 no-border-radius">
                <h3 className="font-space font-bold text-sm text-ideon-cyan uppercase tracking-wider mb-3">Our Vision</h3>
                <p className="font-inter text-sm text-[rgba(248,250,252,0.60)] leading-relaxed">
                  To be the leading technology partner for businesses worldwide, recognized for innovation, quality, and transformative digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div>
            <h3 className="font-space font-bold text-lg text-ideon-white mb-8">Our Core Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-ideon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-space font-bold text-base text-ideon-white mb-1 group-hover:text-ideon-cyan transition-colors duration-200">
                      {value.title}
                    </h4>
                    <p className="font-inter text-sm text-[rgba(248,250,252,0.50)] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
