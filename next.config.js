/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'my-vastra.herokuapp.com', 'placeimg.com'],
  },
};

module.exports = nextConfig;
