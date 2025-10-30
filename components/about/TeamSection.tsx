'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Twitter, Github } from 'lucide-react'
import { TEAM } from '@/lib/constants'
import Link from 'next/link'

export default function TeamSection() {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet The <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate individuals driving StriveGo's vision forward
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 sm:h-64 bg-gradient-to-br from-quantum-cyan/20 to-royal-purple/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-quantum-cyan font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <Link
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-quantum-cyan hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {member.social.twitter && (
                    <Link
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-quantum-cyan hover:text-white transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                  )}
                  {member.social.github && (
                    <Link
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-quantum-cyan hover:text-white transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

