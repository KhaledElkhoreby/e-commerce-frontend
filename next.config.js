/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['cdn.shopify.com'] },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
