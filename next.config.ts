import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    clientSegmentCache: true,
    inlineCss: true,
    routerBFCache: true,
    staleTimes: {
      dynamic: 30,
    },
  },
  reactCompiler: true,
  typedRoutes: true,
};

module.exports = nextConfig;
