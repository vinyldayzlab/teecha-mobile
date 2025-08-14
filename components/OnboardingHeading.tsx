import { useRouter } from "expo-router";
import { TouchableOpacityProps, View } from "react-native";
import { textVariants } from "@lib/tailwind";
import { Text } from "react-native";
import Stepper from "@components/Stepper";
import IconButton from "@components/buttons/IconButton";
import { ArrowLeftIcon } from "@components/icons";

type OnboardingHeadingProps = {
  title: string;
  stepper?: {
    step: number;
    totalSteps: number;
  };
  onPress?: () => void;
} & TouchableOpacityProps;

const OnboardingHeading: React.FC<OnboardingHeadingProps> = ({
  title,
  stepper = false,
  onPress,
}) => {
  const router = useRouter();

  return (
    <View className="flex flex-col gap-4 w-full">
      <View className="flex flex-row gap-2">
        <IconButton
          icon={<ArrowLeftIcon />}
          type="secondary"
          onPress={onPress ?? (() => router.back())}
        />
        {stepper && (
          <Stepper
            steps={[
              { completed: true },
              { current: true },
              { current: false },
              { current: false },
            ]}
          />
        )}
      </View>
      <Text className={`${textVariants.h2} text-neutral-100`}>{title}</Text>
    </View>
  );
};

export default OnboardingHeading;
