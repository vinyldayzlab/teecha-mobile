import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "@/globals.css";
import { useFonts } from "expo-font";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Auth0Provider } from "react-native-auth0";
import Constants from "expo-constants";
import { useCallback, useEffect, useState } from "react";

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    barlow: require("../assets/fonts/Barlow-Regular.ttf"),
    "barlow-bold": require("../assets/fonts/Barlow-Bold.ttf"),
    // Add more styles/weights as needed
  });

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hide();
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady && fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady, fontsLoaded]);

  // if (!appIsReady || !fontsLoaded) {
  //   return null;
  // }

  // const config = Constants?.expoConfig ?? Constants?.manifest2;
  // const domain = config?.extra?.auth0Domain;
  // const clientId = config?.extra?.auth0ClientId;

  // if (!domain || !clientId) {
  //   throw new Error(
  //     "Missing Auth0 config values. Check app.config.js and .env.",
  //   );
  // }

  return (
    // <Auth0Provider domain={domain} clientId={clientId}>
    // <Stack>
    //   <Stack.Screen name="splash" options={{ headerShown: false }} />
    //   <Stack.Screen name="onboarding" options={{ headerShown: false }} />
    //   <Stack.Screen name="signup" options={{ headerShown: false }} />
    //   <Stack.Screen name="login" options={{ headerShown: false }} />
    // </Stack>
    // </Auth0Provider>
    <View style={{ flex: 1 }}>
      <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(app)" options={{ headerShown: false }} /> */}
      </Stack>
    </View>
  );
};

export default RootLayout;
