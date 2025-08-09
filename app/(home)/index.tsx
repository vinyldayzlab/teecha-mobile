import Button from "@components/buttons/Button";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { useAuth0 } from "react-native-auth0";

export default function AuthenticatedArea() {
  const { user, clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
      router.replace("/(auth)");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="flex-1 pt-40">
      <Text>Authenticated! - {user && user.email}</Text>
      <Button onPress={onPress} title="Log out" />
    </View>
  );
}
