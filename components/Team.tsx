'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const team = [
  {
    name: 'Amir Hamza',
    image: 'https://i.postimg.cc/ZYXmHpTB/Whats-App-Image-2026-07-19-at-10-36-28-PM.jpg',
    role: 'CEO',
    description: 'A motivated and customer-focused Sales Professional responsible for building strong client relationships, identifying business opportunities, promoting products and services, and supporting sales growth. Skilled in communication, lead generation, customer follow-up, negotiation, and maintaining client satisfaction. Focused on achieving sales targets and contributing to the overall success of the organization.',
    avatarColor: '#06B6D4',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Sheikh Siam',
    image: 'https://i.postimg.cc/90bThgRB/Chat-GPT-Image-May-31-2026-05-44-27-PM.png',
    role: 'Founder',
    description: 'An organized and results-driven Operations Developer focused on improving business processes, supporting technical operations, and developing efficient digital solutions. Skilled in coordinating tasks, analyzing operational requirements, troubleshooting technical issues, managing systems and data, and collaborating with teams to ensure smooth and efficient day-to-day operations. Passionate about automation, process optimization, and using technology to improve productivity and business performance.',
    avatarColor: '#3B82F6',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Slaman Sha',
    image: 'https://i.postimg.cc/D0qh5rZ9/(470)-Discord-Salman-Shah-Google-Chrome-9-3-2026-10-25-27-PM.png',
    role: 'Lead Operations Developer',
    description: 'A responsible and detail-oriented Operations Developer focused on improving business processes, supporting technical operations, and ensuring smooth day-to-day workflow. Skilled in task coordination, system management, troubleshooting, data handling, process optimization, and collaboration with different teams. Dedicated to using technology and efficient solutions to improve productivity, operational performance, and overall business efficiency.',
    avatarColor: '#8B5CF6',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  }
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