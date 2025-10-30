'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'diagonal'
  flip?: boolean
  className?: string
}

export default function SectionDivider({
  variant = 'wave',
  flip = false,
  className = '',
}: SectionDividerProps) {
  const variants = {
    wave: (
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={flip ? 'transform rotate-180' : ''}
      >
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill="currentColor"
          className="text-white dark:text-primary"
        />
      </svg>
    ),
    curve: (
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z"
          fill="currentColor"
          className="text-white dark:text-primary"
        />
      </svg>
    ),
    diagonal: (
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,0 L1440,120 L1440,120 L0,120 Z"
          fill="currentColor"
          className="text-white dark:text-primary"
        />
      </svg>
    ),
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-full ${className}`}
      style={{ color: flip ? 'inherit' : 'white' }}
    >
      {variants[variant]}
    </motion.div>
  )
}

