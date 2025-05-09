const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@chiragpurohit71085/demo-react-plugin'],
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.tsx',
      ...config.resolve.extensions
    ]

    // Prevent multiple React instances
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react': path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
        'react-native-web': path.resolve('./node_modules/react-native-web'),
      }
    }

    return config
  },
}

module.exports = nextConfig