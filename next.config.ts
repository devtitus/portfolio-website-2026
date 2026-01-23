import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
      {
        source: "/projects",
        destination: "/",
      },
      {
        source: "/contact",
        destination: "/",
      },
    ];
  },
  // Suppress React DevTools version validation errors
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-devtools-core': false,
      };
    }
    return config;
  },
};

export default nextConfig;
