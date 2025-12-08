'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import { COMPANY_INFO, STATS } from '@/lib/constants'

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-quantum-cyan to-royal-purple rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              {COMPANY_INFO.mission}
            </p>
            <p className="text-lg text-gray-500 italic">
              {COMPANY_INFO.dna.impact}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-quantum-cyan/10 to-royal-purple/10 rounded-2xl p-8 glass"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              We focus on building practical, affordable, and scalable tech products from WhatsApp bots to websites, mobile apps, and edutech platforms that drive growth and create real impact.
            </p>
          </motion.div>
        </div>

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-royal-purple/10 to-quantum-cyan/10 rounded-2xl p-8 glass order-2 md:order-1"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              At {COMPANY_INFO.name}, our mission goes beyond technology it&apos;s about empowering people. By combining AI innovation with Kenyan resilience and creativity, we aim to transform small businesses into competitive enterprises.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-quantum-cyan rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {COMPANY_INFO.vision}
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.slice(0, 4).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="text-3xl font-bold text-quantum-cyan">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

