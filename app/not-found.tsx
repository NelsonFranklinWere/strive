import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-primary">
      <div className="text-center text-white px-4">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-quantum-cyan text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

