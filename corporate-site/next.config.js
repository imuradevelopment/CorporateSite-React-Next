/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(process.env.GITHUB_ACTIONS && {
    basePath: '/CorporateSite-React-Next',
    assetPrefix: '/CorporateSite-React-Next',
  })
}

module.exports = nextConfig 