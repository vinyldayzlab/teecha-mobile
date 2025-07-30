import { useRouter } from "expo-router";
import { TouchableOpacityProps, View } from "react-native";
import { textVariants } from "constants/typography";
import { Text } from "react-native";
import Stepper from "./Stepper";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import IconButton from "./buttons/IconButton";

type OnboardingHeadingProps = {
  title: string;
  stepper?: boolean;
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
        {/* progress bar */}
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
      <Text className={`${textVariants.h2} text-neutral-900`}>{title}</Text>
    </View>
  );
};

export default OnboardingHeading;
