import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustedBrands from '@/components/home/TrustedBrands'
import WhatWeDo from '@/components/home/WhatWeDo'
import FeaturedSolutions from '@/components/home/FeaturedSolutions'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'StriveGo — AI Automation & SaaS Development Company in Nairobi | Digital Innovation for Africa',
  description:
    'StriveGo empowers African businesses with AI-driven automation, SaaS development, and startup innovation tools. Based in Nairobi, we build systems that scale your growth.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'StriveGo — AI Automation & SaaS Development Company in Nairobi | Digital Innovation for Africa',
    description:
      'StriveGo empowers African businesses with AI-driven automation, SaaS development, and startup innovation tools. Based in Nairobi, we build systems that scale your growth.',
    url: 'https://strivego.online/',
    images: [{ url: '/images/logo/logo.jpeg', width: 1200, height: 630 }],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBrands />
      <WhatWeDo />
      <FeaturedSolutions />
      <CTASection />
    </>
  )
}

