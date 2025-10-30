'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function ContactHero() {
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
          <div className="w-20 h-20 bg-quantum-cyan rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let's Bring Your <span className="text-quantum-cyan">Vision</span> to Life
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Connect with StriveGo today. We're here to help transform your business with intelligent automation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

