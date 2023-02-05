/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_URL: process.env.MONGO_URL,
    WEATHER_BASE_URL: process.env.WEATHER_BASE_URL,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    VERCEL_URL: process.env.VERCEL_URL,
  }
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.example.com/:path*',
        },
      ]
    },
};