import { Stack } from "expo-router";

const SignUpLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="name" options={{ headerShown: false }} />
      <Stack.Screen name="email" options={{ headerShown: false }} />
      <Stack.Screen name="teacher-code" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SignUpLayout;
