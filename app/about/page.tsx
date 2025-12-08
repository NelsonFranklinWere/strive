import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import MissionVision from '@/components/about/MissionVision'
import CoreValues from '@/components/about/CoreValues'
import TeamSection from '@/components/about/TeamSection'
import Testimonials from '@/components/about/Testimonials'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: "About StriveGo | Top Tech Company in Nairobi | Our Mission & Team",
  description:
    'Learn about StriveGo, one of the top 5 tech companies in Nairobi. Discover our mission to help businesses focus on growth through AI automation and SaaS development. Meet the team driving innovation in Kenya.',
  keywords: [
    'top tech company nairobi',
    'about strivego',
    'tech company nairobi team',
    'AI automation company nairobi',
    'SaaS development nairobi',
    'business automation kenya',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About StriveGo | Top Tech Company in Nairobi | Our Mission & Team",
    description:
      'Learn about StriveGo, one of the top 5 tech companies in Nairobi. Discover our mission to help businesses focus on growth through AI automation and SaaS development.',
    url: 'https://strivego.online/about',
    images: [{ url: '/images/logo/logo.jpeg', width: 1200, height: 630, alt: 'StriveGo Team - Top Tech Company Nairobi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About StriveGo | Top Tech Company in Nairobi",
    description: 'Learn about StriveGo, one of the top 5 tech companies in Nairobi. Discover our mission and team.',
    images: ['/images/logo/logo.jpeg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <Testimonials />
    </>
  )
}

