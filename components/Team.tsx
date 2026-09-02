'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const team = [
  {
    name: 'Alex Morgan',
    image: '/images/team/alex-morgan.jpg',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years in tech. Drives IDEON\'s mission to transform digital experiences.',
    avatarColor: '#06B6D4',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Sarah Chen',
    image: '/images/team/sarah-chen.jpg',
    role: 'CTO',
    description: 'Full-stack architect specializing in scalable systems. Expert in React, Node.js, and cloud architecture.',
    avatarColor: '#3B82F6',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'David Kim',
    image: '/images/team/david-kim.jpg',
    role: 'Lead Designer',
    description: 'Award-winning UI/UX designer. Creates intuitive, beautiful interfaces that users love.',
    avatarColor: '#8B5CF6',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Emily Rodriguez',
    image: '/images/team/emily-rodriguez.jpg',
    role: 'AI Lead',
    description: 'Machine learning engineer building intelligent automation and AI-powered solutions.',
    avatarColor: '#FF8A3D',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="py-28 sm:py-36 bg-ideon-navy">
      <div ref={ref} className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">OUR TEAM</p>
          <h2 className="section-title">Meet The Minds Behind IDEON</h2>
          <p className="font-inter text-base text-[rgba(248,250,252,0.50)] max-w-2xl mx-auto mt-4">
            A team of passionate technologists, designers, and innovators dedicated to building exceptional digital products.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group glass-card p-6 no-border-radius text-center transition-all duration-300 hover:border-ideon-cyan hover:shadow-[0_0_60px_rgba(6,182,212,0.1)]"
            >
              {/* Avatar with Image */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-ideon-cyan transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    priority={index < 2}
                  />
                </div>
                {!member.image && (
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-syne font-extrabold text-ideon-black"
                    style={{ backgroundColor: member.avatarColor }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-ideon-cyan transition-all duration-300 scale-110 opacity-0 group-hover:opacity-100" />
              </div>

              {/* Info */}
              <h3 className="font-space font-bold text-lg text-ideon-white mb-1">
                {member.name}
              </h3>
              <p className="font-mono text-xs text-ideon-cyan uppercase tracking-wider mb-3">
                {member.role}
              </p>
              <p className="font-inter text-sm text-[rgba(248,250,252,0.50)] leading-relaxed mb-4">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <a href={member.socials.github} className="text-[rgba(248,250,252,0.25)] hover:text-ideon-cyan transition-colors duration-200">
                  <Github className="w-4 h-4" />
                </a>
                <a href={member.socials.linkedin} className="text-[rgba(248,250,252,0.25)] hover:text-ideon-cyan transition-colors duration-200">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={member.socials.twitter} className="text-[rgba(248,250,252,0.25)] hover:text-ideon-cyan transition-colors duration-200">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}