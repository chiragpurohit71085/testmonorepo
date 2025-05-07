const path = require("path");

module.exports = {
  webpack: (config) => {
    // Alias react-native to react-native-web
    config.resolve.alias["react-native"] = "react-native-web";

    // Add support for .mjs files
    config.resolve.extensions.push(".mjs");

    return config;
  },
};