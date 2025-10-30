import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import MissionVision from '@/components/about/MissionVision'
import CoreValues from '@/components/about/CoreValues'
import TeamSection from '@/components/about/TeamSection'
import Testimonials from '@/components/about/Testimonials'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: "About StriveGo | Nairobi’s Leading AI Automation & SaaS Startup",
  description:
    'Learn about StriveGo’s mission to automate African businesses through AI and technology. Discover our vision, values, and the innovators behind our impact.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About StriveGo | Nairobi’s Leading AI Automation & SaaS Startup",
    description:
      'Learn about StriveGo’s mission to automate African businesses through AI and technology. Discover our vision, values, and the innovators behind our impact.',
    url: 'https://strivego.online/about',
    images: [{ url: '/images/logo/logo.jpeg', width: 1200, height: 630 }],
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

