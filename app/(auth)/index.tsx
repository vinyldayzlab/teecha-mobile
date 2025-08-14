import ButtonGroup from "@components/buttons/ButtonGroup";
import { textVariants } from "@lib/tailwind";
import { Image, ScrollView, Text, View } from "react-native";
import { spacingVariants } from "@lib/tailwind";
import bgImage from "@assets/icons/teecha-white-text.png";
import Icon from "@assets/icons/teecha-icon.svg";
import { useAuth0 } from "react-native-auth0";
import { router } from "expo-router";
import Constants from "expo-constants";

export default function Onboarding() {
  const { authorize } = useAuth0();

  return (
    <View>
      <ScrollView
        style={{ flex: 1 }}
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
                onPress: async () => {
                  await authorize({
                    additionalParameters: {
                      prompt: __DEV__
                        ? Constants.expoConfig?.extra?.auth0Prompt
                        : "consent",
                      role: "teacher",
                    },
                  });
                  router.replace("/(home)/agenda");
                },
              },
              {
                title: "I'm a student",
                type: "secondary",
                route: {
                  link: "(auth)/student-verify",
                },
              },
            ]}
          />
        </View>
      </ScrollView>
    </View>
  );
}
