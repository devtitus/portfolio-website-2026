import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pravatar.cc', 'cdn.sanity.io'],
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
};

export default nextConfig;
