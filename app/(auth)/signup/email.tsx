import { Text, View } from "react-native";
import { useSignUpSteps } from "@hooks/useSignUpSteps";
import OnboardingHeading from "@components/OnboardingHeading";

const Email = () => {
  const { step, totalSteps, title } = useSignUpSteps();

  return (
    <View className="flex-1 justify-center items-center">
      <OnboardingHeading
        title={title ?? "Loading..."}
        stepper={
          step !== undefined && totalSteps !== undefined
            ? { step, totalSteps }
            : undefined
        }
      />
    </View>
  );
};

export default Email;
