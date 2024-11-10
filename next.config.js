/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  // },
  // experimental: {
  //   appDir: true
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
      },
    ],
  },
};

module.exports = nextConfig;
