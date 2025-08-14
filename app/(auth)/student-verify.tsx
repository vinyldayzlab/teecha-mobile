import ButtonGroup from "@components/buttons/ButtonGroup";
import OnboardingHeading from "@components/OnboardingHeading";
import { spacing } from "@lib/theme";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useAuth0 } from "react-native-auth0";

export default function StudentVerify() {
  const { authorize } = useAuth0();

  const onPressLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: spacing.viewPadding,
        backgroundColor: "red",
      }}
      keyboardShouldPersistTaps="handled"
      bounces={false}
    >
      <View className="flex-1 flex-col gap-8 w-full items-center">
        <OnboardingHeading title="Do you have an account?" />
        <ButtonGroup
          buttons={[
            {
              title: "No, create an account",
              type: "primary",
              route: {
                link: "/(auth)/teacher-code",
              },
            },
            {
              title: "Yes, login",
              type: "secondary",
              onPress: onPressLogin,
            },
          ]}
        />
      </View>
    </ScrollView>
  );
}
