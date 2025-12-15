'use client'

import { motion } from 'framer-motion'
import { PRODUCTS } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

const featuredProducts = PRODUCTS.slice(0, 6)

export default function FeaturedSolutions() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-2 sm:px-3 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Featured <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-[12px] sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From StriveGo Labs - Innovative AI tools and platforms transforming businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-4 md:gap-6 place-items-stretch">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group min-w-0"
            >
              <Link href={`/products/${product.id}`} className="block max-w-full">
                <div className="bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                  <div className="relative overflow-hidden bg-gradient-to-br from-quantum-cyan/20 to-royal-purple/20 aspect-[4/3] sm:aspect-[5/3]">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                        unoptimized={true}
                      />
                    )}
                    <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3">
                      <span className={`px-1.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold ${
                        product.status === 'live' 
                          ? 'bg-green-100 text-green-800' 
                          : product.status === 'coming-soon'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {product.status === 'live' ? 'Live' : product.status === 'coming-soon' ? 'Coming Soon' : 'In Development'}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 flex-1 flex flex-col min-w-0">
                    <div className="text-xl sm:text-4xl mb-2 sm:mb-4">{product.icon}</div>
                    <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-quantum-cyan transition-colors truncate">
                      {product.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3 flex-1">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-quantum-cyan font-semibold text-xs sm:text-sm flex items-center group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {product.demoUrl && (
                        <a
                          href={product.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-quantum-cyan"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Removed View All Products button as requested */}
      </div>
    </section>
  )
}

