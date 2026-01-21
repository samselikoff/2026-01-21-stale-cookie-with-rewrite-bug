import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // cacheComponents: true,

  rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [
            {
              type: 'cookie',
              key: 'isLoggedIn',
            },
          ],
          destination: '/welcome',
        },
      ],
    };
  },
};

export default nextConfig;
