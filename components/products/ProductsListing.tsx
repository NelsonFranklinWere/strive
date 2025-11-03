'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { PRODUCTS } from '@/lib/constants'
import { type Product } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

const categories = [
  { id: 'saas', label: 'SaaS Products' },
  { id: 'automation', label: 'Automation Tools' },
  { id: 'ai-agents', label: 'AI Agents' },
  { id: 'consultancy', label: 'Consultancy' },
] as const

export default function ProductsListing() {
  const searchParams = useSearchParams()
  const initialCategory = (searchParams.get('category') as string) || 'saas'
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)

  useEffect(() => {
    const cat = (searchParams.get('category') as string) || 'saas'
    setSelectedCategory(cat)
  }, [searchParams])

  const filteredProducts = PRODUCTS.filter((p) => p.category === selectedCategory)

  return (
    <section className="">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative AI solutions and automation tools designed to transform your business
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-2 sm:gap-4 mb-12 overflow-x-auto whitespace-nowrap justify-start sm:justify-center -mx-4 px-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'inline-flex px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all whitespace-nowrap',
                selectedCategory === category.id
                  ? 'bg-quantum-cyan text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-quantum-cyan'
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group min-w-0"
            >
              <Link href={`/products/${product.id}`}>
                <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                  <div className="relative h-48 bg-gradient-to-br from-quantum-cyan/20 to-royal-purple/20 overflow-hidden">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-4 right-4">
                      <span
                        className={cn(
                          'px-3 py-1 rounded-full text-xs font-semibold',
                          product.status === 'live'
                            ? 'bg-green-100 text-green-800'
                            : product.status === 'coming-soon'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        )}
                      >
                        {product.status === 'live'
                          ? 'Live'
                          : product.status === 'coming-soon'
                          ? 'Coming Soon'
                          : 'In Development'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-quantum-cyan transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-quantum-cyan font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {product.demoUrl && (
                        <a
                          href={product.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-quantum-cyan"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

