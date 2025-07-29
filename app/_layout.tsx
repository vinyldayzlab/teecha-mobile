import { Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    barlow: require("../assets/fonts/Barlow-Regular.ttf"),
    "barlow-bold": require("../assets/fonts/Barlow-Bold.ttf"),
    // Add more styles/weights as needed
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View className="flex-1 font-barlow">
      <Stack>
        <Stack.Screen name="splash" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
};

export default RootLayout;
