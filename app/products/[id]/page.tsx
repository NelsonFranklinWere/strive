import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ProductDetail from '@/components/products/ProductDetail'
import { PRODUCTS } from '@/lib/constants'

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.id === params.id)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.title} | AI Automation Tool by Top Tech Company Nairobi | StriveGo`,
    description: `${product.shortDescription} Built by StriveGo, one of the top tech companies in Nairobi. ${product.description}`,
    keywords: [
      product.title.toLowerCase(),
      'AI automation nairobi',
      'SaaS tool nairobi',
      'business automation kenya',
      'top tech company nairobi',
      product.category,
    ],
    openGraph: {
      title: `${product.title} | AI Automation Tool by Top Tech Company Nairobi | StriveGo`,
      description: `${product.shortDescription} Built by StriveGo, one of the top tech companies in Nairobi.`,
      images: product.image ? [{ url: product.image, width: 1200, height: 630, alt: `${product.title} - StriveGo` }] : [],
      url: `https://strivego.online/products/${product.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | Top Tech Company Nairobi`,
      description: product.shortDescription,
      images: product.image ? [product.image] : [],
    },
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20">
      <ProductDetail product={product} />
    </div>
  )
}

