'use client'

import { motion } from 'framer-motion'
import { CORE_VALUES } from '@/lib/constants'

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
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at StriveGo
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {CORE_VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-hover bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

