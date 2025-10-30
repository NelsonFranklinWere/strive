'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export default function MapSection() {
  const displayAddress = 'Rongai, Nairobi, Kenya'
  const mapsQuery = encodeURIComponent(displayAddress)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-quantum-cyan rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone / WhatsApp</h3>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-gray-600 hover:text-quantum-cyan transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-quantum-cyan rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-gray-600 hover:text-quantum-cyan transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-quantum-cyan rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
              <p className="text-gray-600">{displayAddress}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-quantum-cyan rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-quantum-cyan transition-colors"
              >
                Chat with us on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder (embed removed temporarily) */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 p-6 flex items-center justify-between">
        <div>
          <p className="text-gray-700 font-semibold">View our location</p>
          <p className="text-gray-500 text-sm">{displayAddress}</p>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-quantum-cyan text-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
        >
          <span>Open in Maps</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  )
}

