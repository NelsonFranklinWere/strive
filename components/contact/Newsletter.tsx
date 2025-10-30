'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'
import { type NewsletterData } from '@/lib/types'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Replace with actual API endpoint or Firebase
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setIsSuccess(true)
      setEmail('')
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Error subscribing:', error)
      alert('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white"
    >
      <div className="max-w-2xl mx-auto">
        <Mail className="w-12 h-12 mx-auto mb-4 text-quantum-cyan" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with Our Innovation
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Subscribe to our newsletter to get the latest updates on AI solutions, automation tools, and tech insights.
        </p>

        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-500/20 border border-green-300/30 rounded-lg flex items-center justify-center space-x-3"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Successfully subscribed! Check your email.</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-row items-stretch gap-3 max-w-2xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-[1_1_70%] min-w-0 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-quantum-cyan"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-[0_0_auto] bg-quantum-cyan text-white px-6 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 btn-hover-glow whitespace-nowrap"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Subscribing...</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

