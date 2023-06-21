/** @type {import('next').NextConfig} */
const API_KEY = '09049690cf5bf59acf12fda802f3bbc6';

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact/:path*',
        destination: '/form/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
