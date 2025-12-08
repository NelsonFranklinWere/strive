import { COMPANY_INFO } from '@/lib/constants'

interface EnhancedSEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export default function EnhancedSEO({
  title,
  description,
  image = '/images/logo/logo.jpeg',
  url = 'https://strivego.online',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
}: EnhancedSEOProps) {
  const fullTitle = title || 'StriveGo | Top Tech Company in Nairobi | AI Automation & SaaS Development'
  const fullDescription = description || COMPANY_INFO.tagline

  return (
    <>
      {/* Enhanced Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Dublin Core Metadata */}
      <meta name="DC.title" content={fullTitle} />
      <meta name="DC.description" content={fullDescription} />
      <meta name="DC.creator" content={COMPANY_INFO.name} />
      <meta name="DC.subject" content={tags.join(', ') || 'Technology, AI Automation, SaaS Development, Nairobi'} />
      <meta name="DC.language" content="en-KE" />
      <meta name="DC.coverage" content="Nairobi, Kenya" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="KE-110" />
      <meta name="geo.placename" content="Nairobi" />
      <meta name="geo.position" content={`${COMPANY_INFO.location.lat};${COMPANY_INFO.location.lng}`} />
      <meta name="ICBM" content={`${COMPANY_INFO.location.lat}, ${COMPANY_INFO.location.lng}`} />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`https://strivego.online${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${COMPANY_INFO.name} - Top Tech Company in Nairobi`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="StriveGo - Top Tech Company Nairobi" />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:locale:alternate" content="sw_KE" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, i) => <meta key={i} property="article:tag" content={tag} />)}
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`https://strivego.online${image}`} />
      <meta name="twitter:image:alt" content={`${COMPANY_INFO.name} - Top Tech Company in Nairobi`} />
      <meta name="twitter:site" content="@OchiengNe88651" />
      <meta name="twitter:creator" content="@OchiengNe88651" />
      
      {/* Business/Contact Info */}
      <meta name="contact" content={COMPANY_INFO.email} />
      <meta name="phone" content={COMPANY_INFO.phone} />
      <meta name="address" content={COMPANY_INFO.address} />
      
      {/* Keywords */}
      <meta name="keywords" content="top 5 tech companies in nairobi, top 10 companies in nairobi, best tech company nairobi, AI automation nairobi, SaaS development nairobi, business automation tools, software development nairobi" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en-KE" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </>
  )
}

