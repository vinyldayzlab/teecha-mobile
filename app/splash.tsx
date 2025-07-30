import { Text, View, ActivityIndicator } from "react-native";
import { router, useRootNavigationState } from "expo-router";
import { useEffect } from "react";

export default function SplashScreen() {
  const navState = useRootNavigationState();

  useEffect(() => {
    if (!navState?.key) return;

    const timeout = setTimeout(async () => {
      router.replace("/onboarding");
    }, 1600);

    return () => clearTimeout(timeout);

    // const checkOnboarding = async () => {
    //   const onboarded = await AsyncStorage.getItem('hasOnboarded');

    //   if (onboarded) {
    //     router.replace('/home');
    //   } else {
    //     router.replace('/onboarding');
    //   }
    // };

    // checkOnboarding();
  }, [navState]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>Splash Screen</Text>
    </View>
  );
}
