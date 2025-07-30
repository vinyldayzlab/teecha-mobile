import Button from "components/Button";
import OnboardingHeading from "components/OnboardingHeading";
import { spacingVariants } from "constants/spacing";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";

export default function AccountVerify() {
  const { role } = useLocalSearchParams<{ role?: string }>();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: spacingVariants.viewPadding,
        backgroundColor: "#F8FAFB",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 flex-col gap-8 w-full items-center">
        <OnboardingHeading title="Do you already have an account?" />
        <View className="w-full flex flex-col gap-6">
          <Button
            title="No, create an account"
            type="primary"
            route={{
              link: "/signup",
              params: { role: role },
            }}
          />
          <Button
            title="Yes, login"
            type="secondary"
            route={{
              link: "/login",
              params: { role: role },
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
