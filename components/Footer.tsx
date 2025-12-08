'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Github, MessageCircle } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: COMPANY_INFO.social.facebook },
  { name: 'Twitter', icon: Twitter, href: COMPANY_INFO.social.twitter },
  { name: 'Instagram', icon: Instagram, href: COMPANY_INFO.social.instagram },
  { name: 'LinkedIn', icon: Linkedin, href: COMPANY_INFO.social.linkedin },
  { name: 'GitHub', icon: Github, href: COMPANY_INFO.social.github },
]

const footerLinks = {
  services: [
    { name: 'Website Development', href: '/products?category=saas' },
    { name: 'Mobile App Development', href: '/products?category=automation' },
    { name: 'AI Automation', href: '/products?category=ai-agents' },
    { name: 'Digital Marketing', href: '/products' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Portfolio', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-deep-sapphire text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 py-12">
        {/* Grid: two per row on small, five columns on large */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column (spans two columns on small) */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-display">
                <span className="text-quantum-cyan">Strive</span>
                <span className="text-white">Go</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm mb-2">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-gray-400 text-xs italic">
              {COMPANY_INFO.mission}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-quantum-cyan transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-quantum-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-quantum-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-quantum-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (now separate and beside Resources on small) */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-300 hover:text-quantum-cyan transition-colors">
                  Call us: {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-quantum-cyan transition-colors">
                  Email: {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-300 hover:text-quantum-cyan transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-gray-300 hover:text-quantum-cyan transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-gray-300 hover:text-quantum-cyan transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-300 hover:text-quantum-cyan transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

