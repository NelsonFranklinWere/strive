'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Check } from 'lucide-react'
import { type Product } from '@/lib/types'
import SEOJsonLd from '@/components/SEOJsonLd'

export default function ProductDetail({ product }: { product: Product }) {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: product.description || product.shortDescription,
    image: product.image || '/images/logo/logo.jpeg',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
    },
  }

  return (
    <section>
      <SEOJsonLd data={productSchema} />
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <Link
          href="/products"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-quantum-cyan mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-quantum-cyan/20 to-royal-purple/20"
          >
            {product.image && (
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                unoptimized={true}
              />
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-5xl mb-4">{product.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {product.impact && (
              <div className="bg-gradient-to-br from-quantum-cyan/10 to-royal-purple/10 rounded-2xl p-6 mb-8">
                <div className="text-4xl font-bold text-quantum-cyan mb-2">
                  {product.impact.value}
                </div>
                <div className="text-gray-700 font-semibold mb-1">
                  {product.impact.metric}
                </div>
                <div className="text-gray-600 text-sm">
                  {product.impact.description}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 mb-8">
              {product.demoUrl && (
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-quantum-cyan text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all inline-flex items-center space-x-2 btn-hover-glow"
                >
                  <span>View Live Demo</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              <Link
                href="/contact"
                className="bg-white border-2 border-quantum-cyan text-quantum-cyan px-6 py-3 rounded-full font-semibold hover:bg-quantum-cyan hover:text-white transition-all inline-flex items-center space-x-2"
              >
                <span>Request Integration</span>
              </Link>
            </div>

            {/* Status Badge */}
            <div className="mb-8">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  product.status === 'live'
                    ? 'bg-green-100 text-green-800'
                    : product.status === 'coming-soon'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {product.status === 'live'
                  ? '✓ Live Now'
                  : product.status === 'coming-soon'
                  ? '⏳ Coming Soon'
                  : '🚧 In Development'}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features</h2>
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <Check className="w-6 h-6 text-quantum-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {product.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

