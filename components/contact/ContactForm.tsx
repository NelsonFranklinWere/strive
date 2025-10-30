'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { SERVICE_TYPES, COMPANY_INFO } from '@/lib/constants'
import { type ContactFormData } from '@/lib/types'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // TODO: Replace with actual API endpoint or EmailJS
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quantum-cyan focus:border-transparent transition-all"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quantum-cyan focus:border-transparent transition-all"
            placeholder="your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quantum-cyan focus:border-transparent transition-all"
            placeholder="your company name"
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interested In
          </label>
          <select
            {...register('serviceType')}
            id="serviceType"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quantum-cyan focus:border-transparent transition-all"
          >
            <option value="">Select a service</option>
            {SERVICE_TYPES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            id="message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quantum-cyan focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-quantum-cyan text-white px-6 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 btn-hover-glow"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}

