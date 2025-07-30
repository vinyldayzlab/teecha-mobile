import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useRouter } from "expo-router";
import { textVariants } from "constants/typography";

const styles = {
  container: "w-full py-5 rounded-full items-center justify-center",
  primary: {
    button: "bg-primary",
    text: "text-neutral-100",
  },
  secondary: {
    button: "bg-neutral-100",
    text: "text-neutral-900",
    border: "border border-neutral-500",
  },
};

export type ButtonProps = {
  title: string;
  onPress?: () => void;
  type?: "primary" | "secondary";
  route?: {
    link: string;
    params?: Record<string, any>;
  };
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  type = "primary",
  route,
}) => {
  const router = useRouter();

  const handlePress = () => {
    if (route) {
      console.log({ pathname: route.link as any, params: route.params });
      router.push({ pathname: route.link as any, params: route.params });
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${styles.container} ${
        type === "primary"
          ? styles.primary.button
          : `${styles.secondary.button} ${styles.secondary.border}`
      }`}
    >
      <Text
        className={`${textVariants.h5} ${
          type === "primary" ? styles.primary.text : styles.secondary.text
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
