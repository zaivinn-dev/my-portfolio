import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fmnl9-7.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fmnl9-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fmnl9-4.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fmnl9-3.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fmnl9-6.fna.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;
