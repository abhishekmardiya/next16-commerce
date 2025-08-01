import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    inlineCss: true,
    reactCompiler: true,
    useCache: true,
  },
};

module.exports = nextConfig;
