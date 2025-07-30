import ButtonGroup from "@components/buttons/ButtonGroup";
import { textVariants } from "@constants/typography";
import { Image, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import logo from "@assets/images/favicon.png";
import { spacingVariants } from "@constants/spacing";

export default function Onboarding() {
  return (
    <LinearGradient
      colors={["#f0fbf8", "#ffffff", "#ffffff"]}
      style={{ flex: 1, padding: 0 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: spacingVariants.viewPadding,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 w-full justify-center items-center">
          <View className="flex-1 w-full h-1/3 justify-center items-center">
            <Image source={logo} />
          </View>
          <View className="flex flex-col gap-3 items-center mb-8">
            <Text className={`${textVariants.h1} text-center text-neutral-900`}>
              Welcome to Teecha!
            </Text>
            <Text
              className={`${textVariants.body1} text-center text-neutral-700`}
            >
              Manage your private classes as a teacher or access lessons as a
              student.
            </Text>
          </View>
          <ButtonGroup
            buttons={[
              {
                title: "I'm a student",
                type: "primary",
                route: {
                  link: "/onboarding/account-verify",
                  params: { role: "student" },
                },
              },
              {
                title: "I'm a teacher",
                type: "secondary",
                route: {
                  link: "/onboarding/account-verify",
                  params: { role: "teacher" },
                },
              },
            ]}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
