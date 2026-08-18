'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

export const PROJECTS = [
  {
    id: 1,
    title: "AI Applications",
    image: "https://img.sanishtech.com/u/209e0171e5f34371c5d24a9af04fc372.png",
    category: "AI",
    tags: ["Next.js", "React", "TypeScript", "Gemini API", "MongoDB", "Node.js", "Express.js"],
    description:
      "An AI-powered assistant frontend providing intelligent real-time chat, context-aware visual responses, Gemini API integration, dynamic streaming animations, and a futuristic cyberpunk UI.",
    github: "https://github.com/Siam24857/AI-agent-cleint.git",
    link: "https://ai-agent-cleint.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management System",
    image: "https://img.sanishtech.com/u/fe3a2d5787ea8ed3cbd5805652645ec9.png",
    category: "Full Stack",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description:
      "A comprehensive task management platform with drag-and-drop boards, real-time collaboration, team workspaces, and analytics dashboards.",
    github: "https://github.com/Siam24857",
    link: "https://keenkeeper-web-platform.netlify.app",
    featured: false,
  },
  {
    id: 3,
    title: "ERP System",
    image: "https://img.sanishtech.com/u/2d50e7b34b58f46a3f76bf0aad098e14.png",
    category: "Full Stack",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    description:
      "Enterprise Resource Planning system with inventory management, order processing, financial reporting, and multi-role dashboards.",
    github: "https://github.com/Siam24857/Cloudflare-client.git",
    link: "https://cloudflare-client-omega.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Developer Tools",
    image: "https://img.sanishtech.com/u/21fbe56b03d8b4c109051a9b5ea1a97d.png",
    category: "Frontend",
    tags: [
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
    ],
    description:
      "A suite of developer utilities including code formatters, API testers, color palette generators, and snippet managers.",
    github: "https://github.com/Siam24857/Fab-E-book-platform.git",
    link: "https://fab-e-book-platform.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Full Stack Applications",
    image: "https://img.sanishtech.com/u/95d1b1d196df8da86b0ec155a15d31fb.png",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Node.js", "Express"],
    description:
      "Production-ready full-stack applications with authentication, payment integration, admin panels, and real-time notifications.",
    github: "https://github.com/Siam24857/Marketplace-client.git",
    link: "https://marketplace-client-one.vercel.app",
    featured: false,
  },
]

const filters = ['ALL', 'AI', 'FULL STACK', 'FRONTEND']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-28 sm:py-36 bg-ideon-navy">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-12">
          <p className="section-eyebrow">PORTFOLIO</p>
          <h2 className="section-title">Projects That Define Excellence</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-6 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-space text-xs font-semibold uppercase tracking-[0.08em] pb-2 transition-all duration-200 relative ${
                activeFilter === filter
                  ? 'text-ideon-white border-b-2 border-ideon-orange'
                  : 'text-[rgba(248,250,252,0.35)] hover:text-ideon-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-ideon-black border border-[rgba(248,250,252,0.07)] overflow-hidden no-border-radius cursor-pointer transition-all duration-300 hover:border-ideon-cyan hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-ideon-navy">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ideon-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ideon-cyan mb-2 inline-block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-space font-bold text-xl text-ideon-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[rgba(248,250,252,0.50)] text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-1 bg-[rgba(6,182,212,0.08)] border border-[rgba(6,182,212,0.20)] text-ideon-cyan no-border-radius"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[rgba(248,250,252,0.06)]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-xs text-ideon-orange hover:text-ideon-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-xs text-[rgba(248,250,252,0.35)] hover:text-ideon-white transition-colors duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-ideon-orange text-ideon-black no-border-radius">
                      Featured
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
