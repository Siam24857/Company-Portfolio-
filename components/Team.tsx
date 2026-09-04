'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Twitter, Code, Cpu, Palette } from 'lucide-react'

const team = [
  {
    name: 'Sheikh Siam',
    role: 'Founder & Chief Technology Officer (CTO)',
    description: 'Responsible for technology strategy, full-stack development, software architecture, product engineering, and technical leadership.',
    avatarColor: '#06B6D4',
    icon: Code,
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Co-Founder & CEO',
    role: 'Chief Executive Officer',
    description: 'Responsible for business strategy, company operations, client relationships, partnerships, and business development.',
    avatarColor: '#3B82F6',
    icon: Cpu,
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Co-Founder & CPO',
    role: 'Chief Product/Design Officer',
    description: 'Responsible for product strategy, UI/UX, product design, user experience, and creative direction.',
    avatarColor: '#8B5CF6',
    icon: Palette,
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
          <h2 className="section-title">Meet The IDEONS Team</h2>
          <p className="font-inter text-base text-[rgba(248,250,252,0.50)] max-w-2xl mx-auto mt-4">
            A small, focused core team combining technical excellence, business acumen, and creative vision.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => {
            const Icon = member.icon
            return (
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
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-syne font-extrabold text-ideon-black"
                    style={{ backgroundColor: member.avatarColor }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
