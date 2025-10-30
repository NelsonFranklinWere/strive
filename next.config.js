/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // Enforce https and apex domain
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'www.strivego.online' },
        ],
        destination: 'https://strivego.online/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'strivego.online' },
          { type: 'header', key: 'x-forwarded-proto', value: 'http' },
        ],
        destination: 'https://strivego.online/:path*',
        permanent: true,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig

