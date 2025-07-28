import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Onboarding() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-primary text-5xl">Teecha</Text>
      <Link href="/onboarding/account-verify">I'm a student</Link>
      <Link href="/onboarding/account-verify">I'm a tutor</Link>
    </View>
  );
}
