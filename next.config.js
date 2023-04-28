/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tmbd.org', 'themoviedb.org', 'image.tmdb.org']
  }
}

module.exports = nextConfig
