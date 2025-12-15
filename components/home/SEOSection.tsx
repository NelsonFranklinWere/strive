'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Users, Zap } from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: 'Top 5 Tech Companies in Nairobi',
    description: 'Recognized as one of the leading technology companies in Nairobi, Kenya, delivering innovative solutions for business growth.',
  },
  {
    icon: TrendingUp,
    title: '40% Sales Increase',
    description: 'Our AI automation tools have helped clients achieve up to 40% increase in sales through automated workflows and intelligent systems.',
  },
  {
    icon: Users,
    title: '150+ Happy Clients',
    description: 'Trusted by over 150 businesses across Nairobi and Kenya, from startups to established enterprises seeking digital transformation.',
  },
  {
    icon: Zap,
    title: '70% Time Reduction',
    description: 'Our automation systems reduce manual work by up to 70%, allowing businesses to focus on high-value strategic initiatives.',
  },
]

export default function SEOSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why StriveGo is Among the <span className="gradient-text">Top Tech Companies in Nairobi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As one of Nairobi's leading software development and server maintenance companies, we help businesses focus on growth 
            by providing expert software development services, professional server maintenance, IT support, and building automation 
            tools that handle repetitive tasks, streamline workflows, and optimize operations. Our expert software developers and 
            server maintenance specialists ensure your technology infrastructure runs smoothly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantum-cyan to-royal-purple flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-quantum-cyan to-royal-purple rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Leading Business Growth Through Automation
          </h3>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">
            As one of the top 10 companies in Nairobi, StriveGo specializes in comprehensive software development services, 
            server maintenance, IT support, and building automation tools that help businesses focus on what matters most. 
            Whether you need help with software development or server maintenance in Nairobi, our expert team provides 
            professional solutions that eliminate manual work, reduce costs, and accelerate growth for companies across Kenya and Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-white/20 px-4 py-2 rounded-full">Software Development Nairobi</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Server Maintenance Experts</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Top Tech Company Nairobi</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">AI Automation Experts</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">IT Support Services</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">SaaS Development Leaders</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

