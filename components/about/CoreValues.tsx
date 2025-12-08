'use client'

import { motion } from 'framer-motion'
import { CORE_VALUES, COMPANY_INFO } from '@/lib/constants'

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">DNA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            The truest DNA of StriveGo
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-r from-quantum-cyan to-royal-purple rounded-2xl p-6 md:p-8 max-w-4xl mx-auto"
          >
            <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
            <p className="text-white/90 text-sm md:text-base mt-4">
              {COMPANY_INFO.dna.impact}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {CORE_VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="card-hover bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-5xl md:text-6xl mb-4">{value.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-quantum-cyan font-semibold text-sm md:text-base mb-4">
                {value.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {value.fullDescription}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            These three pillars define our culture, guide our products, and shape our legacy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

