/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/films/:id',
        destination: '/movies/:id',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
