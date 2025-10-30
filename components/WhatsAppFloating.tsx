'use client'

import { MessageCircle } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export default function WhatsAppFloating() {
  return (
    <a
      href={COMPANY_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 group"
    >
      <div className="relative">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 shadow-lg flex items-center justify-center transition-transform group-hover:scale-105">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        <span className="absolute -top-2 -left-2 px-2 py-0.5 text-[10px] rounded-full bg-white/90 text-green-600 font-semibold shadow">Chat</span>
      </div>
    </a>
  )
}
