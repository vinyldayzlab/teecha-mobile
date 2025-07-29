import Button from "components/Button";
import { textVariants } from "constants/typography";
import { ScrollView, Text, View } from "react-native";

export default function Onboarding() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
      }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 w-full justify-center items-center">
        <View className="flex flex-col gap-3 items-center mb-8">
          <Text className={`${textVariants.h1} text-center`}>
            Welcome to Teecha!
          </Text>
          <Text className={`${textVariants.body1} text-center`}>
            Manage your private classes as a teacher or find and access lessons
            as a student.
          </Text>
        </View>
        <View className="w-full flex flex-col gap-8">
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
        </View>
      </View>
    </ScrollView>
  );
}
