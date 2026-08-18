'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react'

const footerLinks = {
  services: ['Web Development', 'Mobile Development', 'UI/UX Design', 'AI & Automation', 'Digital Transformation', 'Software Solutions'],
  company: ['About IDEON', 'Our Projects', 'Technologies', 'Team', 'Careers', 'Blog'],
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer ref={ref} className="bg-ideon-black border-t border-[rgba(248,250,252,0.06)] pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-syne font-extrabold text-2xl text-ideon-white mb-3">
              IDEON
            </h3>
            <p className="font-inter text-sm text-[rgba(248,250,252,0.30)] mb-4">
              Building Digital Experiences That Move Businesses Forward.
            </p>
            <div className="w-1.5 h-1.5 rounded-full bg-ideon-orange mb-6" />
            <div className="flex items-center gap-4">
              {[Github, Linkedin, Twitter, Dribbble].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[rgba(248,250,252,0.25)] hover:text-ideon-cyan transition-colors duration-200"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-space font-semibold text-sm text-ideon-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="font-inter text-sm text-[rgba(248,250,252,0.40)] hover:text-ideon-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-space font-semibold text-sm text-ideon-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="font-inter text-sm text-[rgba(248,250,252,0.40)] hover:text-ideon-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-space font-semibold text-sm text-ideon-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@ideon.co" className="font-inter text-sm text-[rgba(248,250,252,0.40)] hover:text-ideon-white transition-colors duration-200">
                  hello@ideon.co
                </a>
              </li>
              <li className="font-inter text-sm text-[rgba(248,250,252,0.40)]">
                Available for projects worldwide
              </li>
              <li className="font-inter text-sm text-[rgba(248,250,252,0.40)]">
                Response within 24 hours
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(248,250,252,0.06)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[rgba(248,250,252,0.20)]">
            © 2025 IDEON. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="font-mono text-xs text-[rgba(248,250,252,0.20)] hover:text-ideon-cyan transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-[rgba(248,250,252,0.20)]">·</span>
            <a href="#" className="font-mono text-xs text-[rgba(248,250,252,0.20)] hover:text-ideon-cyan transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
