'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_INFO } from '@/lib/constants'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-50" />
      
      {/* Particle Field (render on client only to avoid hydration mismatch) */}
      {mounted && (
        <div className="absolute inset-0 particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {COMPANY_INFO.tagline}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At StriveGo we <strong className="text-white">innovate with purpose</strong>, <strong className="text-white">empower with integrity</strong>, and <strong className="text-white">transform with impact</strong>.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              One of the top 5 tech companies in Nairobi, building AI automation tools and SaaS platforms that help businesses focus on growth by automating valuable workflows.
            </motion.p>

            <motion.div
              className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href="/products"
                className="group bg-quantum-cyan text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-2 hover:bg-opacity-90 transition-all btn-hover-glow"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-2 hover:bg-white/20 transition-all"
              >
                <span>Talk to Us</span>
                <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

