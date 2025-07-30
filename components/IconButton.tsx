import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useRouter } from "expo-router";

const styles = {
  container: "p-3 rounded-full items-center justify-center",
  primary: {
    button: "bg-primary",
  },
  secondary: {
    button: "bg-neutral-100 border border-neutral-500",
  },
};

type IconButtonProps = {
  icon: React.ReactElement;
  onPress?: () => void;
  type?: "primary" | "secondary";
  route?: {
    link: string;
    params?: Record<string, any>;
  };
} & TouchableOpacityProps;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  type = "primary",
  route,
}) => {
  const router = useRouter();

  const handlePress = () => {
    if (route) {
      router.push({ pathname: route.link as any, params: route.params });
    } else if (onPress) {
      onPress();
    }
  };

  const containerStyle =
    type === "primary" ? styles.primary.button : styles.secondary.button;

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${styles.container} ${containerStyle}`}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
