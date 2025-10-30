/**
 * Image placeholder utility to handle missing images gracefully
 */

export function getPlaceholderImage(type: 'product' | 'testimonial' | 'client' | 'team' = 'product'): string {
  // Use placeholder.com or a gradient placeholder
  const dimensions = {
    product: '800x600',
    testimonial: '200x200',
    client: '300x200',
    team: '400x400',
  }

  const colors = {
    product: '0D1B2A/4A00E0',
    testimonial: '4A00E0/00F5D4',
    client: '0D1B2A/FFFFFF',
    team: '00F5D4/4A00E0',
  }

  // Return a gradient placeholder
  return `https://via.placeholder.com/${dimensions[type]}/${colors[type]}/FFFFFF?text=StriveGo`
}

export function getGradientPlaceholder(width = 800, height = 600): string {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0D1B2A;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#4A00E0;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00F5D4;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dy=".3em">StriveGo</text>
    </svg>`
  ).toString('base64')}`
}

