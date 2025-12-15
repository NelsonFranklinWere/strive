import type { Metadata } from 'next'
import { Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { COMPANY_INFO } from '@/lib/constants'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import { ThemeProvider } from '@/components/ThemeProvider'
import SEOJsonLd from '@/components/SEOJsonLd'

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
    default: 'StriveGo | Top Tech Company in Nairobi | AI Automation & SaaS Development',
    template: `%s | StriveGo - Leading Tech Company Nairobi`,
  },
  description: 'StriveGo is one of the top 5 tech companies in Nairobi, Kenya. We provide comprehensive software development services, server maintenance, IT support, and business automation solutions. Expert software developers and server maintenance specialists serving Nairobi businesses. Leading AI automation, SaaS development, and infrastructure management in Kenya.',
  keywords: [
    // Top company rankings
    'top 5 tech companies in nairobi',
    'top 10 companies in nairobi',
    'best tech company nairobi',
    'leading tech companies nairobi',
    'top software companies nairobi',
    'best IT company nairobi',
    'top tech startups nairobi',
    'premier tech company nairobi',
    // Core services
    'StriveGo',
    'Strive Go',
    'AI automation nairobi',
    'SaaS development nairobi',
    'business automation tools',
    'AI tools for business growth',
    'software development nairobi',
    'tech company nairobi kenya',
    // Software Development Services - Nairobi
    'software development services nairobi',
    'custom software development nairobi',
    'software developers nairobi',
    'hire software developers nairobi',
    'software development company nairobi',
    'best software developers nairobi',
    'professional software development nairobi',
    'software solutions nairobi',
    'web development services nairobi',
    'mobile app development nairobi',
    'software consulting nairobi',
    'enterprise software development nairobi',
    'software development agency nairobi',
    // Server Maintenance Services - Nairobi
    'server maintenance nairobi',
    'server maintenance services nairobi',
    'server management nairobi',
    'IT server support nairobi',
    'server maintenance company nairobi',
    'server maintenance help nairobi',
    'server administration nairobi',
    'server maintenance experts nairobi',
    'server monitoring nairobi',
    'server support nairobi',
    'dedicated server maintenance nairobi',
    'cloud server maintenance nairobi',
    'server maintenance consultants nairobi',
    'server infrastructure management nairobi',
    // IT Support & Maintenance
    'IT support nairobi',
    'IT maintenance nairobi',
    'IT services nairobi',
    'technical support nairobi',
    'IT help desk nairobi',
    'IT infrastructure management nairobi',
    'system administration nairobi',
    'network maintenance nairobi',
    'IT maintenance services nairobi',
    // Specific services
    'AI Kenya',
    'software developers Kenya',
    'AI developers Nairobi',
    'WhatsApp bots Kenya',
    'M-Pesa integration',
    'mobile app development Kenya',
    'website developers Nairobi',
    'ecommerce Kenya',
    'business automation Kenya',
    'SaaS Kenya',
    'digital transformation nairobi',
    'AI consulting nairobi',
    'startup technology nairobi',
    'business growth tools',
    'workflow automation nairobi',
    // Industry terms
    'tech innovation nairobi',
    'digital solutions kenya',
    'enterprise software nairobi',
    'cloud solutions kenya',
    'AI solutions africa',
    // Help & Support Keywords
    'help with software development nairobi',
    'software development help nairobi',
    'server maintenance help nairobi',
    'need software developer nairobi',
    'find software developer nairobi',
    'need server maintenance nairobi',
    'server maintenance company near me',
    'software development company near me',
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
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
    siteName: 'StriveGo - Top Tech Company Nairobi',
    title: 'StriveGo | Top 5 Tech Companies in Nairobi | AI Automation & SaaS Development',
    description: 'StriveGo ranks among the top 5 tech companies in Nairobi. We provide expert software development services, server maintenance, IT support, and business automation solutions. Leading software development, server maintenance, and AI innovation in Kenya. Trusted software developers and server maintenance specialists.',
    images: [
      {
        url: '/images/logo/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'StriveGo - Top Tech Company in Nairobi, Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StriveGo | Top Tech Company in Nairobi | AI Automation & SaaS',
    description: 'One of the top 5 tech companies in Nairobi. Building AI automation tools and SaaS platforms for business growth.',
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
  category: 'Technology',
  classification: 'Business Technology Services',
  other: {
    'geo.region': 'KE-110',
    'geo.placename': 'Nairobi',
    'geo.position': '-1.286389;36.817223',
    'ICBM': '-1.286389, 36.817223',
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
    logo: {
      '@type': 'ImageObject',
      url: 'https://strivego.online/images/logo/logo.jpeg',
      width: 1200,
      height: 630,
    },
    description: 'StriveGo is one of the top 5 tech companies in Nairobi, Kenya. We provide expert software development services, server maintenance, IT support, and build AI automation tools, SaaS platforms, and business growth systems that help companies focus on valuable work.',
    foundingDate: '2020',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      addressCountry: 'KE',
    },
    sameAs: [
      COMPANY_INFO.social.linkedin,
      COMPANY_INFO.social.twitter,
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.instagram,
      COMPANY_INFO.social.github,
    ].filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone,
        contactType: 'Customer Support',
        areaServed: ['KE', 'Africa'],
        availableLanguage: ['en', 'sw'],
      },
      {
        '@type': 'ContactPoint',
        email: COMPANY_INFO.email,
        contactType: 'Sales',
        areaServed: ['KE', 'Africa'],
        availableLanguage: ['en'],
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    knowsAbout: [
      'AI Automation',
      'SaaS Development',
      'Software Development',
      'Server Maintenance',
      'IT Support',
      'Infrastructure Management',
      'Business Automation',
      'Digital Transformation',
      'Mobile App Development',
      'Web Development',
      'AI Consulting',
      'System Administration',
      'Cloud Solutions',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY_INFO.name,
    alternateName: ['StriveGo', 'Strive Go'],
    url: 'https://strivego.online',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    image: ['https://strivego.online/images/logo/logo.jpeg'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.location.lat,
      longitude: COMPANY_INFO.location.lng,
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'City',
      name: 'Nairobi',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: COMPANY_INFO.location.lat,
        longitude: COMPANY_INFO.location.lng,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Automation',
            description: 'AI-powered automation systems for business processes',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Development',
            description: 'Custom SaaS platform development for businesses',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software Development',
            description: 'Custom software development services for businesses in Nairobi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Server Maintenance',
            description: 'Professional server maintenance and management services in Nairobi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Support',
            description: 'Comprehensive IT support and infrastructure management services',
          },
        },
      ],
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is StriveGo one of the top tech companies in Nairobi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, StriveGo is recognized as one of the top 5 tech companies in Nairobi. We specialize in AI automation, SaaS development, and building business growth tools that help companies focus on valuable work.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does StriveGo offer in Nairobi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'StriveGo offers comprehensive technology services including custom software development, server maintenance and management, IT support, AI automation systems, SaaS platform development, WhatsApp bot integration, M-Pesa payment integration, mobile app development, web development, infrastructure management, and business automation consulting services in Nairobi, Kenya.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide software development services in Nairobi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, StriveGo is a leading software development company in Nairobi. We provide custom software development, web development, mobile app development, and enterprise software solutions for businesses across Nairobi and Kenya. Our expert software developers build scalable, high-quality applications tailored to your business needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer server maintenance services in Nairobi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, StriveGo provides professional server maintenance and management services in Nairobi. Our server maintenance experts handle server monitoring, administration, updates, security, and infrastructure management. We offer both on-premises and cloud server maintenance services to ensure your systems run smoothly and securely.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where can I find help with software development in Nairobi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'StriveGo is one of the top software development companies in Nairobi providing expert help with software development. We offer software consulting, custom development, and technical support. Contact us for software development services, whether you need web applications, mobile apps, or enterprise software solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where can I find server maintenance help in Nairobi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'StriveGo provides server maintenance help and services in Nairobi. Our server maintenance specialists offer 24/7 monitoring, regular maintenance, security updates, performance optimization, and troubleshooting. We help businesses maintain reliable server infrastructure and prevent downtime.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does StriveGo help businesses focus on growth?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'StriveGo builds automation tools and SaaS platforms that handle repetitive tasks, streamline workflows, and optimize business processes. This allows businesses to focus on strategic, high-value work that drives growth instead of manual, time-consuming tasks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is StriveGo located in Nairobi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'StriveGo is located in Nairobi CBD, Kenya. We serve clients across Nairobi and throughout Kenya, providing technology solutions for businesses looking to automate and scale their operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes StriveGo a top tech company in Nairobi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'StriveGo stands out as a top tech company in Nairobi through our innovative AI-powered solutions, proven track record of delivering results (40% sales increase for clients), expertise in cutting-edge technologies, and commitment to helping African businesses grow through automation and intelligent systems.',
        },
      },
    ],
  }

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    author: {
      '@type': 'Person',
      name: 'John Hill',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody: 'The WhatsApp bot StriveGo created for our car store has increased our sales by 40%. I love it when my customers are able to order, pay via M-Pesa and be tracked. Amazing!',
  }

  // Additional structured data for better SEO
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'StriveGo Products and Services',
    description: 'AI automation tools, SaaS platforms, and business growth solutions by StriveGo',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Software Development Services',
        description: 'Custom software development, web development, and mobile app development in Nairobi',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Server Maintenance Services',
        description: 'Professional server maintenance, management, and IT infrastructure support in Nairobi',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'AI Automation',
        description: 'AI-powered automation systems for business processes',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'SaaS Development',
        description: 'Custom SaaS platform development for businesses',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'IT Support',
        description: 'Comprehensive IT support and infrastructure management services',
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Technology Services',
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Nairobi',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://strivego.online/contact',
      servicePhone: COMPANY_INFO.phone,
    },
    description: 'Professional software development, server maintenance, IT support, and AI automation services in Nairobi, Kenya',
    category: 'Software Development, Server Maintenance, IT Support',
  }

  const softwareDevelopmentSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development Services',
    name: 'Software Development Services in Nairobi',
    description: 'Expert custom software development, web development, and mobile app development services in Nairobi, Kenya',
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Nairobi',
      '@id': 'https://www.wikidata.org/wiki/Q3870',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://strivego.online/contact',
      servicePhone: COMPANY_INFO.phone,
    },
  }

  const serverMaintenanceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Server Maintenance Services',
    name: 'Server Maintenance Services in Nairobi',
    description: 'Professional server maintenance, server management, and IT infrastructure support services in Nairobi, Kenya',
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Nairobi',
      '@id': 'https://www.wikidata.org/wiki/Q3870',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://strivego.online/contact',
      servicePhone: COMPANY_INFO.phone,
    },
  }

  return (
    <html lang="en-KE" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00d9ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="StriveGo" />
      </head>
      <body>
        <ThemeProvider>
          <SEOJsonLd data={[orgSchema, localBusinessSchema, websiteSchema, breadcrumbSchema, faqSchema, reviewSchema, itemListSchema, serviceSchema, softwareDevelopmentSchema, serverMaintenanceSchema]} />
          <Analytics />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
