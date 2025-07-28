import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function AccountVerify() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-primary text-5xl">Do you have an account?</Text>
      <Link href="/signup">I don't have an account</Link>
      <Link href="/login">I'm already signed up</Link>
    </View>
  );
}
