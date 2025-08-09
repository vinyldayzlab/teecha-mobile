import "dotenv/config";

export default {
  expo: {
    name: "Teecha",
    slug: "teecha-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/teecha-icon.png",
    scheme: "teechamobile",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    extra: {
      auth0Domain: process.env.AUTH0_DOMAIN,
      auth0ClientId: process.env.AUTH0_CLIENTID,
    },
    ios: {
      bundleIdentifier: process.env.IOS_BUNDLE_IDENTIFIER,
      supportsTablet: true,
    },
    android: {
      package: process.env.ANDROID_PACKAGE,
      adaptiveIcon: {
        foregroundImage: "./assets/images/teecha-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/teecha-icon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/teecha-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#202020",
        },
      ],
      "expo-font",
      [
        "react-native-auth0",
        {
          domain: process.env.AUTH0_DOMAIN,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
};
