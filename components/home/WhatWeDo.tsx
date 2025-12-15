'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Users } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Code,
    title: 'Digital Systems & SaaS Tools',
    description: 'Creating powerful automation tools and scalable SaaS platforms that transform how businesses operate.',
    link: '/products?category=saas',
    color: 'from-quantum-cyan to-royal-purple',
  },
  {
    icon: Zap,
    title: 'AI-Powered Process Optimization',
    description: 'Using intelligent bots and agents to automate workflows, reduce costs, and increase productivity by 40%+.',
    link: '/products?category=automation',
    color: 'from-royal-purple to-quantum-cyan',
  },
  {
    icon: Users,
    title: 'Tech Consultancy & Mentorship',
    description: 'Supporting startups from idea to implementation with expert guidance and hands-on development.',
    link: '/products?category=consultancy',
    color: 'from-quantum-cyan to-neon-turquoise',
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As one of the top tech companies in Nairobi, we provide comprehensive software development services, server maintenance, IT support, AI solutions, and business automation tools tailored for Kenyan SMEs and companies. Our expert software developers and server maintenance specialists help businesses focus on growth by automating repetitive tasks and maintaining reliable infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group min-w-0"
              >
                <Link href={service.link}>
                  <div className="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-quantum-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

