import type { Metadata } from 'next'
import ProductsListing from '@/components/products/ProductsListing'

export const metadata: Metadata = {
  title: 'AI & Automation Products | StriveGo SaaS Tools and Solutions',
  description:
    'Explore StriveGo’s automation systems, SaaS products, and AI-powered solutions built to optimize business workflows across Kenya and Africa.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'AI & Automation Products | StriveGo SaaS Tools and Solutions',
    description:
      'Explore StriveGo’s automation systems, SaaS products, and AI-powered solutions built to optimize business workflows across Kenya and Africa.',
    url: 'https://strivego.online/products',
    images: [{ url: '/images/logo/logo.jpeg', width: 1200, height: 630 }],
  },
}

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-20">
      <ProductsListing />
    </div>
  )
}

