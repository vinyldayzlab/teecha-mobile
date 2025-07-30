const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

const extraNodeModules = {
  ...config.resolver.extraNodeModules,
  "@": path.resolve(__dirname, "app"),
  "@components": path.resolve(__dirname, "components"),
  "@constants": path.resolve(__dirname, "constants"),
  "@assets": path.resolve(__dirname, "assets"),
};

config.resolver.extraNodeModules = extraNodeModules;

config.watchFolders = [
  path.resolve(__dirname, "app"),
  path.resolve(__dirname, "components"),
  path.resolve(__dirname, "constants"),
  path.resolve(__dirname, "assets"),
];

module.exports = withNativeWind(config, { input: "./app/globals.css" });
