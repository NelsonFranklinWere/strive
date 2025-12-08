'use client'

import { motion } from 'framer-motion'
import { CORE_VALUES, COMPANY_INFO } from '@/lib/constants'
import { Brain, Heart, Sparkles } from 'lucide-react'

const pillarIcons = {
  Innovate: Brain,
  Empower: Heart,
  Transform: Sparkles,
}

export default function DNASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Truest <span className="gradient-text">DNA of StriveGo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Three pillars that define our culture, guide our products, and shape our legacy
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-quantum-cyan via-royal-purple to-quantum-cyan rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <p className="text-white text-2xl md:text-3xl font-bold leading-relaxed mb-4">
              {COMPANY_INFO.mission}
            </p>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full mt-6" />
          </div>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CORE_VALUES.map((pillar, index) => {
            const Icon = pillarIcons[pillar.title as keyof typeof pillarIcons] || Brain
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-quantum-cyan transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-quantum-cyan to-royal-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-quantum-cyan font-semibold text-lg mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base flex-grow">
                    {pillar.fullDescription}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-quantum-cyan" />
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {pillar.title === 'Innovate' && 'Mind'}
                        {pillar.title === 'Empower' && 'Heart'}
                        {pillar.title === 'Transform' && 'Soul'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
              &ldquo;{COMPANY_INFO.dna.impact}&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

