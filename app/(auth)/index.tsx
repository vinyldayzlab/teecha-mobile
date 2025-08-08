import ButtonGroup from "@components/buttons/ButtonGroup";
import { textVariants } from "@constants/typography";
import { Image, ScrollView, Text, View } from "react-native";
import { spacingVariants } from "@constants/spacing";
import bgImage from "@assets/images/teecha-white-text.png";
import Icon from "@assets/icons/teecha-icon.svg";

export default function Onboarding() {
  return (
    <View>
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
          className="flex-1 h-full w-full px-12 pt-16 aspect-square"
        />

        <View
          style={{ padding: spacingVariants.viewPadding }}
          className="relative w-full h-1/2 max-h-1/2 justify-center items-center rounded-t-[4rem] bg-neutral-300"
        >
          <View className="absolute top-0 -translate-y-1/2 w-44 h-44 shadow-md">
            <Icon width="100%" height="100%" />
          </View>
          <View className="flex flex-col gap-3 items-center my-8">
            <Text className={`${textVariants.h1} text-center text-neutral-800`}>
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
                title: "I'm a teacher",
                type: "primary",
                route: {
                  link: "(auth)/account-verify",
                  params: { role: "teacher" },
                },
              },
              {
                title: "I'm a student",
                type: "secondary",
                route: {
                  link: "(auth)/account-verify",
                  params: { role: "student" },
                },
              },
            ]}
          />
        </View>
      </ScrollView>
    </View>
  );
}
