import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "@/globals.css";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { Auth0Provider, useAuth0 } from "react-native-auth0";
import { useEffect, useState } from "react";
import auth0, { domain, clientId } from "@lib/auth0";

SplashScreen.setOptions({ duration: 1000, fade: true });
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    barlow: require("../assets/fonts/Barlow-Regular.ttf"),
    "barlow-medium": require("../assets/fonts/Barlow-Medium.ttf"),
    "barlow-bold": require("../assets/fonts/Barlow-Bold.ttf"),
  });

  const [readyToRender, setReadyToRender] = useState(false);
  const { user, isLoading } = useAuth0();
  const credentialsManager = auth0.credentialsManager;
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        const hasCreds = await credentialsManager.hasValidCredentials();
        if (hasCreds) {
          await credentialsManager.getCredentials();
          console.log("User logged in:", hasCreds);
          router.replace("/(home)");
        } else {
          router.replace("/(auth)");
        }
      } catch (e) {
        console.warn("Auth check error:", e);
        router.replace("/(auth)");
      } finally {
        setAppIsReady(true);
        SplashScreen.hide();
      }
    };
    prepare();
  }, [user]);

  if (!fontsLoaded) return null;

  return (
    <Auth0Provider domain={domain} clientId={clientId}>
      <View style={{ flex: 1 }}>
        <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
        </Stack>
      </View>
    </Auth0Provider>
  );
};

export default RootLayout;
