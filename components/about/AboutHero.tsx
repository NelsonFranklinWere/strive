'use client'

import { motion } from 'framer-motion'
import { COMPANY_INFO } from '@/lib/constants'

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-quantum-cyan rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            About <span className="text-quantum-cyan">StriveGo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {COMPANY_INFO.name} is not just a tech company — it's a movement of creators, coders, and dreamers.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

