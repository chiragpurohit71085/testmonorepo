// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // if you’re on Next.js ≥13.1 you can use built-in transpilePackages:
  transpilePackages: ['user-info-widget'],
  // if you’re on an older version, use next-transpile-modules:
  // ...require('next-transpile-modules')(['user-info-widget'])(),

  webpack(config) {
    // 3. Alias all “react-native” imports to react-native-web
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };

    // 4. Let Next.js resolve .web.js/.native.js correctly
    config.resolve.extensions = [
      '.web.js',
      '.web.tsx',
      '.native.js',
      '.native.tsx',
      ...config.resolve.extensions,
    ];

    return config;
  },
};

module.exports = nextConfig;
