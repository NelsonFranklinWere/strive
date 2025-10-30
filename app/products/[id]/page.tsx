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
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      title: product.title,
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

