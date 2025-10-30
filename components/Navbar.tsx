'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { COMPANY_INFO } from '@/lib/constants'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement | null>(null)
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null)

  // Force solid navbar on light pages like /products where the top background is white
  const forceSolidOnLoad = pathname.startsWith('/products')
  const isSolid = scrolled || forceSolidOnLoad

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        // Ignore clicks on the toggle button
        if (toggleBtnRef.current && toggleBtnRef.current.contains(target)) return
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isSolid ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-8 w-8 rounded-md overflow-hidden ring-1 ring-white/20">
              <Image
                src="/images/logo/logo.jpeg"
                alt="StriveGo logo"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-2xl font-bold font-display">
              <span className="text-quantum-cyan">Strive</span>
              <span className={cn(isSolid ? 'text-deep-sapphire' : 'text-white')}>Go</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-quantum-cyan',
                  pathname === link.href
                    ? 'text-quantum-cyan'
                    : isSolid
                    ? 'text-gray-700'
                    : 'text-white'
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-quantum-cyan"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-quantum-cyan text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all btn-hover-glow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={toggleBtnRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={cn('h-6 w-6', isSolid ? 'text-gray-700' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', isSolid ? 'text-gray-700' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block py-2 text-gray-700 hover:text-quantum-cyan transition-colors',
                    pathname === link.href && 'text-quantum-cyan font-medium'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block bg-quantum-cyan text-white px-6 py-2 rounded-full font-medium text-center hover:bg-opacity-90 transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

