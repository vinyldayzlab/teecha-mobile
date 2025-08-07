import ButtonGroup from "@components/buttons/ButtonGroup";
import { textVariants } from "@constants/typography";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import logo from "@assets/images/favicon.png";
import { spacingVariants } from "@constants/spacing";
import bgImage from "@assets/images/onboarding-bg-3.png";
import icon from "@assets/images/icon.png";

export default function Onboarding() {
  return (
    <View className="flex-1 bg-neutral-800">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Image
          source={bgImage}
          resizeMode="contain"
          className="flex-1 w-full h-full px-12 aspect-square"
        />

        <View
          style={{ padding: spacingVariants.viewPadding }}
          className="w-full h-1/2 max-h-1/2 justify-center items-center rounded-t-[4rem] bg-neutral-300"
        >
          <View className="flex flex-col gap-3 items-center mb-8">
            {/*<Image
              source={icon}
              resizeMode="contain"
              className="flex-1 w-16 h-16 aspect-square"
            />*/}
            <Text className={`${textVariants.h1} text-center text-neutral-900`}>
              Welcome!
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
    </View>
  );
}
