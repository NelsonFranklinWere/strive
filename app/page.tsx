import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustedBrands from '@/components/home/TrustedBrands'
import DNASection from '@/components/home/DNASection'
import WhatWeDo from '@/components/home/WhatWeDo'
import FeaturedSolutions from '@/components/home/FeaturedSolutions'
import CTASection from '@/components/home/CTASection'
import SEOSection from '@/components/home/SEOSection'

export const metadata: Metadata = {
  title: 'StriveGo | Top 5 Tech Companies in Nairobi | Software Development & Server Maintenance Services',
  description:
    'StriveGo ranks among the top 5 tech companies in Nairobi. We provide expert software development services, server maintenance, IT support, and AI automation solutions. Leading software developers and server maintenance specialists in Nairobi, Kenya. Trusted by 150+ clients.',
  keywords: [
    'top 5 tech companies in nairobi',
    'top 10 companies in nairobi',
    'best tech company nairobi',
    'leading tech companies nairobi',
    'top software companies nairobi',
    'AI automation nairobi',
    'SaaS development nairobi',
    'business growth tools',
    'business automation nairobi',
    'software development nairobi',
    'software development services nairobi',
    'custom software development nairobi',
    'software developers nairobi',
    'server maintenance nairobi',
    'server maintenance services nairobi',
    'server management nairobi',
    'IT support nairobi',
    'server maintenance help nairobi',
    'help with software development nairobi',
    'software development company nairobi',
    'server maintenance company nairobi',
    'tech innovation kenya',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'StriveGo | Top 5 Tech Companies in Nairobi | Software Development & Server Maintenance Services',
    description:
      'StriveGo ranks among the top 5 tech companies in Nairobi. We provide expert software development services, server maintenance, IT support, and AI automation solutions. Leading software developers and server maintenance specialists serving Nairobi businesses.',
    url: 'https://strivego.online/',
    images: [{ url: '/images/logo/logo.jpeg', width: 1200, height: 630, alt: 'StriveGo - Top Tech Company in Nairobi' }],
    type: 'website',
    locale: 'en_KE',
    siteName: 'StriveGo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StriveGo | Top 5 Tech Companies in Nairobi | Software Development & Server Maintenance',
    description: 'One of the top 5 tech companies in Nairobi. Expert software development and server maintenance services for businesses.',
    images: ['/images/logo/logo.jpeg'],
  },
  other: {
    'geo.region': 'KE-110',
    'geo.placename': 'Nairobi',
    'geo.position': '-1.286389;36.817223',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBrands />
      <DNASection />
      <SEOSection />
      <WhatWeDo />
      <FeaturedSolutions />
      <CTASection />
    </>
  )
}

