import React from 'react'

type SEOJsonLdProps = {
  data: Record<string, any> | Record<string, any>[]
}

export default function SEOJsonLd({ data }: SEOJsonLdProps) {
  const json = Array.isArray(data) ? data : [data]
  return (
    <script
      type="application/ld+json"
      // We intentionally disable escaping since this is trusted data we control
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
