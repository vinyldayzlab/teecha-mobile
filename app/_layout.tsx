import { Stack } from "expo-router";
import "@/globals.css";
import { useFonts } from "expo-font";
import { SafeAreaView, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Auth0Provider } from "react-native-auth0";
import Constants from "expo-constants";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    barlow: require("../assets/fonts/Barlow-Regular.ttf"),
    "barlow-bold": require("../assets/fonts/Barlow-Bold.ttf"),
    // Add more styles/weights as needed
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

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
    <Stack>
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      {/*<Stack.Screen name="(app)" options={{ headerShown: false }} />*/}
    </Stack>
  );
};

export default RootLayout;
