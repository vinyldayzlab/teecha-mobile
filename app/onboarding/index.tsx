import Button from "components/Button";
import { Text, View } from "react-native";

export default function Onboarding() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-primary text-5xl">Teecha</Text>
      <Button
        title="I'm a student"
        type="primary"
        route={{
          link: "/onboarding/account-verify",
          params: { role: "student" },
        }}
      />
      <Button
        title="I'm a teacher"
        type="secondary"
        route={{
          link: "/onboarding/account-verify",
          params: { role: "teacher" },
        }}
      />
      <Text className="text-lg font-barlow">This is Barlow Regular</Text>
      <Text className="text-lg font-barlow-bold">This is Barlow Bold</Text>
    </View>
  );
}
