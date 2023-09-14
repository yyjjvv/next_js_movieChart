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
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com",
            port: "",
            pathname: "/watchit/**",
        },
    ],
},
}

module.exports = nextConfig
