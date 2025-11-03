'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { COMPANY_INFO } from '@/lib/constants'

export default function WhatsAppFloating() {
  return (
    <motion.a
      href={COMPANY_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <div className="relative">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center transition-all group-hover:shadow-2xl group-hover:bg-[#20BA5A]">
          <FontAwesomeIcon 
            icon={faWhatsapp} 
            className="w-7 h-7 sm:w-8 sm:h-8 text-white" 
          />
        </div>
        <span className="absolute -top-2 -right-2 px-2 py-1 text-xs rounded-full bg-white/95 text-[#25D366] font-bold shadow-lg border border-[#25D366]/20 whitespace-nowrap">
          Chat
        </span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
      </div>
    </motion.a>
  )
}
