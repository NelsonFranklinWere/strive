'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const LOOP = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories from businesses we&apos;ve worked with
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="testi-scroller will-change-transform">
            {LOOP.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="shrink-0 w-[280px] sm:w-[340px] mr-4 sm:mr-6"
              >
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 sm:mr-4 bg-gradient-to-br from-quantum-cyan/20 to-royal-purple/20">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 truncate">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-quantum-cyan truncate">{testimonial.company}</p>
                      {testimonial.role && (
                        <p className="text-[11px] text-gray-500 truncate">{testimonial.role}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          i < Math.floor(testimonial.rating)
                            ? 'fill-quantum-cyan text-quantum-cyan'
                            : i < testimonial.rating
                            ? 'fill-quantum-cyan/50 text-quantum-cyan/50'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-4">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {testimonial.project && (
                    <p className="text-xs sm:text-sm text-gray-500">
                      Project: <span className="font-semibold">{testimonial.project}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .testi-scroller {
            display: flex;
            align-items: stretch;
            animation: testi-marquee 40s linear infinite;
          }
          .testi-scroller:hover { animation-play-state: paused; }
          @keyframes testi-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 640px) {
            .testi-scroller { animation-duration: 30s; }
          }
        `}</style>
      </div>
    </section>
  )
}

