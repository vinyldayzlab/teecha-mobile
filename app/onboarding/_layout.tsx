import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="account-verify" options={{ headerShown: false }} />
    </Stack>
  );
}
