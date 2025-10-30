'use client'

import { motion } from 'framer-motion'
import { TRUSTED_BRANDS } from '@/lib/constants'
import Image from 'next/image'

export default function TrustedBrands() {
  // Duplicate the brand list to create a seamless loop
  const LOOP_BRANDS = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted By <span className="gradient-text">Kenyan Businesses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Companies across Kenya trust StriveGo to power their digital transformation
          </p>
        </motion.div>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          <div className="scroller will-change-transform">
            {LOOP_BRANDS.map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="shrink-0 flex items-center justify-center px-6">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  width={150}
                  height={80}
                  className="object-contain max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .scroller {
            display: flex;
            gap: 2rem;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .scroller:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 640px) {
            .scroller { gap: 1.25rem; animation-duration: 25s; }
          }
        `}</style>
      </div>
    </section>
  )
}

