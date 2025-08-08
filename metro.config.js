const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg",
);
config.resolver.sourceExts.push("svg");

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  "@": path.resolve(__dirname, "app"),
  "@assets": path.resolve(__dirname, "assets"),
  "@components": path.resolve(__dirname, "components"),
  "@constants": path.resolve(__dirname, "constants"),
  "@hooks": path.resolve(__dirname, "hooks"),
};

config.watchFolders = [
  path.resolve(__dirname, "app"),
  path.resolve(__dirname, "components"),
  path.resolve(__dirname, "constants"),
  path.resolve(__dirname, "assets"),
];

module.exports = withNativeWind(config, { input: "./app/globals.css" });
