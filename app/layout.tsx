import type { Metadata } from 'next'
import { Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { COMPANY_INFO } from '@/lib/constants'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import { ThemeProvider } from '@/components/ThemeProvider'
import SEOJsonLd from '@/components/SEOJsonLd'
import WhatsAppFloating from '@/components/WhatsAppFloating'

// Font loading with fallbacks - if network fails, use system fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: {
    default: 'StriveGo',
    template: `%s | StriveGo`,
  },
  description: COMPANY_INFO.tagline,
  keywords: [
    'StriveGo',
    'Strive Go',
    'AI Kenya',
    'tech company Nairobi',
    'software developers Kenya',
    'AI developers Nairobi',
    'WhatsApp bots Kenya',
    'M-Pesa integration',
    'mobile app development Kenya',
    'website developers Nairobi',
    'ecommerce Kenya',
    'business automation',
    'SaaS Kenya',
    'digital marketing',
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  metadataBase: new URL('https://strivego.online'),
  alternates: {
    canonical: '/',
    languages: {
      'en-KE': '/',
      'sw-KE': '/sw',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://strivego.online',
    siteName: COMPANY_INFO.name,
    title: 'StriveGo',
    description: COMPANY_INFO.tagline,
    images: [
      {
        url: '/images/logo/logo.jpeg',
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StriveGo',
    description: COMPANY_INFO.tagline,
    creator: '@OchiengNe88651',
    images: ['/images/logo/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    other: { bing: 'your-bing-site-verification-code' },
  },
  icons: {
    icon: '/images/logo/logo.jpeg',
    shortcut: '/images/logo/logo.jpeg',
    apple: '/images/logo/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    alternateName: ['StriveGo', 'Strive Go'],
    url: 'https://strivego.online',
    logo: '/images/logo/logo.jpeg',
    sameAs: [
      COMPANY_INFO.social.linkedin,
      COMPANY_INFO.social.twitter,
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.instagram,
      COMPANY_INFO.social.github,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'Customer Support',
      areaServed: 'KE',
      availableLanguage: 'en',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    url: 'https://strivego.online',
    telephone: COMPANY_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    image: ['/images/logo/logo.jpeg'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.location.lat,
      longitude: COMPANY_INFO.location.lng,
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY_INFO.name,
    alternateName: ['StriveGo', 'Strive Go'],
    url: 'https://strivego.online',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://strivego.online/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://strivego.online/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://strivego.online/about' },
      { '@type': 'ListItem', position: 3, name: 'Products', item: 'https://strivego.online/products' },
      { '@type': 'ListItem', position: 4, name: 'Contact', item: 'https://strivego.online/contact' },
    ],
  }

  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ThemeProvider>
          <SEOJsonLd data={[orgSchema, localBusinessSchema, websiteSchema, breadcrumbSchema]} />
          <Analytics />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </ThemeProvider>
      </body>
    </html>
  )
}
