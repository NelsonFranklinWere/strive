import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import MapSection from '@/components/contact/MapSection'
import Newsletter from '@/components/contact/Newsletter'
import SEOJsonLd from '@/components/SEOJsonLd'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact StriveGo | Top Tech Company Nairobi | Let\'s Build Your AI Automation Project',
  description:
    'Get in touch with StriveGo, one of the top 5 tech companies in Nairobi. Contact us to discuss your AI automation, SaaS development, or business growth project. Located in Nairobi CBD, Kenya.',
  keywords: [
    'contact strivego nairobi',
    'tech company contact nairobi',
    'AI automation consultation',
    'SaaS development nairobi',
    'business automation consultation',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact StriveGo | Top Tech Company Nairobi | Let\'s Build Your AI Automation Project',
    description:
      'Get in touch with StriveGo, one of the top 5 tech companies in Nairobi. Contact us to discuss your AI automation or SaaS development project.',
    url: 'https://strivego.online/contact',
    images: [{ url: '/images/logo/logo.jpeg', width: 1200, height: 630, alt: 'Contact StriveGo - Top Tech Company Nairobi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact StriveGo | Top Tech Company Nairobi',
    description: 'Get in touch with StriveGo, one of the top 5 tech companies in Nairobi. Let\'s discuss your project.',
    images: ['/images/logo/logo.jpeg'],
  },
}

export default function ContactPage() {
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: COMPANY_INFO.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.location.lat,
      longitude: COMPANY_INFO.location.lng,
    },
  }

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    url: 'https://strivego.online/contact',
    telephone: COMPANY_INFO.phone,
    image: ['/images/logo/logo.jpeg'],
  }

  return (
    <>
      <SEOJsonLd data={[placeSchema, localSchema]} />
      <ContactHero />
      <div className="container mx-auto px-4 md:px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <ContactForm />
          <MapSection />
        </div>
        <Newsletter />
      </div>
    </>
  )
}

