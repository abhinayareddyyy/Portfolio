/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,

  // Image optimization
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },

  // Ensure build doesn't fail on ESLint warnings (errors still fail)
  eslint: {
    ignoreDuringBuilds: false,
  },

  // TypeScript errors will still fail the build (correct behaviour)
  typescript: {
    ignoreBuildErrors: false,
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
