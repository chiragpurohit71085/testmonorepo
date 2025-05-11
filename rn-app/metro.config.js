const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

const config = getDefaultConfig(projectRoot);

// Watch workspace root and plugin directory
config.watchFolders = [
  workspaceRoot,
  path.resolve(workspaceRoot, 'demo-react-plugin'),
];

// Configure module paths
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Resolve specific packages from app's node_modules (similar to Next.js alias config)
config.resolver.extraNodeModules = {
  'react': path.resolve(projectRoot, 'node_modules/react'),
  'react-native': path.resolve(projectRoot, 'node_modules/react-native'),
  'react-dom': path.resolve(projectRoot, 'node_modules/react-dom'),
  '@react-native/normalize-color': path.resolve(projectRoot, 'node_modules/@react-native/normalize-color'),
};

// Add extensions resolution (similar to Next.js)
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'native.js',
  'native.jsx',
  'native.tsx',
];

module.exports = config;