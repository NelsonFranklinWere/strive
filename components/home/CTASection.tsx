'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-quantum-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-purple rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join the next wave of{' '}
            <span className="text-quantum-cyan">African tech innovation</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Let's build together and transform your business with intelligent automation
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-quantum-cyan text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all btn-hover-glow"
          >
            <span>Let's Build Together</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

