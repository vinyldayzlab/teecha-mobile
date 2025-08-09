import { Stack } from "expo-router";

const AuthLayoutWrapper = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayoutWrapper;
