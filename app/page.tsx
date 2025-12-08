import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustedBrands from '@/components/home/TrustedBrands'
import DNASection from '@/components/home/DNASection'
import WhatWeDo from '@/components/home/WhatWeDo'
import FeaturedSolutions from '@/components/home/FeaturedSolutions'
import CTASection from '@/components/home/CTASection'
import SEOSection from '@/components/home/SEOSection'

export const metadata: Metadata = {
  title: 'StriveGo | Top 5 Tech Companies in Nairobi | AI Automation & Business Growth Tools',
  description:
    'StriveGo ranks among the top 5 tech companies in Nairobi. We build AI automation tools and SaaS platforms that help businesses focus on growth by automating valuable workflows. Leading software development and innovation in Kenya. Trusted by 150+ clients.',
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
    'tech innovation kenya',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'StriveGo | Top 5 Tech Companies in Nairobi | AI Automation & Business Growth Tools',
    description:
      'StriveGo ranks among the top 5 tech companies in Nairobi. We build AI automation tools and SaaS platforms that help businesses focus on growth by automating valuable workflows. Leading software development and innovation in Kenya.',
    url: 'https://strivego.online/',
    images: [{ url: '/images/logo/logo.jpeg', width: 1200, height: 630, alt: 'StriveGo - Top Tech Company in Nairobi' }],
    type: 'website',
    locale: 'en_KE',
    siteName: 'StriveGo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StriveGo | Top 5 Tech Companies in Nairobi | AI Automation & Business Growth Tools',
    description: 'One of the top 5 tech companies in Nairobi. Building AI automation tools and SaaS platforms for business growth.',
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

