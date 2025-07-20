// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static export if needed for deployment
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
}