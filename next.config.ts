import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Pin the project root so Next.js doesn't pick up lockfiles/files in parent directories.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
