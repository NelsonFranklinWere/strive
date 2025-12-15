import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsListing from '@/components/products/ProductsListing'

export const metadata: Metadata = {
  title: 'AI Automation & SaaS Products | Top Tech Company Nairobi | StriveGo Solutions',
  description:
    'Explore StriveGo\'s AI automation systems, SaaS products, software development solutions, and server maintenance services. As one of the top tech companies in Nairobi, we build custom software and provide server maintenance that helps businesses focus on valuable work by automating workflows.',
  keywords: [
    'AI automation tools nairobi',
    'SaaS products nairobi',
    'business automation tools',
    'AI solutions kenya',
    'workflow automation',
    'business growth tools',
    'top tech company products nairobi',
    'software development solutions nairobi',
    'server maintenance services nairobi',
    'custom software nairobi',
    'IT solutions nairobi',
  ],
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'AI Automation & SaaS Products | Top Tech Company Nairobi | StriveGo Solutions',
    description:
      'Explore StriveGo\'s AI automation systems, SaaS products, software development solutions, and server maintenance services. Built by one of the top tech companies in Nairobi.',
    url: 'https://strivego.online/products',
    images: [{ url: '/images/logo/logo.jpeg', width: 1200, height: 630, alt: 'StriveGo Products - AI Automation Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation & SaaS Products | Top Tech Company Nairobi',
    description: 'Explore StriveGo\'s AI automation systems and SaaS products built to help businesses focus on growth.',
    images: ['/images/logo/logo.jpeg'],
  },
}

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-20">
      <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center">Loading products...</div>}>
        <ProductsListing />
      </Suspense>
    </div>
  )
}

