import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@sounds-university/api-client', '@sounds-university/contracts'],
};

export default nextConfig;
