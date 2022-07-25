/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'still-forest-48921.herokuapp.com'],
  },
};

module.exports = nextConfig;
