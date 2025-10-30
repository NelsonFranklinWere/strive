import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function SEO({ title, description, image, url }: SEOProps) {
  const defaultTitle = 'StriveGo — AI, Websites & Mobile Apps'
  const defaultDescription = 'Empowering Startups. Automating Growth. Building Africa\'s Digital Future.'
  const defaultImage = '/images/logo/logo.jpeg'
  const defaultUrl = 'https://strivego.online'

  const metaTitle = title ? `${title} | StriveGo` : defaultTitle
  const metaDescription = description || defaultDescription
  const metaImage = image || defaultImage
  const metaUrl = url || defaultUrl

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Head>
  )
}

