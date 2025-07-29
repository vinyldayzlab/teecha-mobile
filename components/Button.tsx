import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useRouter } from "expo-router";

type ButtonProps = {
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
  ...rest
}) => {
  const router = useRouter();

  const handlePress = () => {
    if (route) {
      router.push({ pathname: route.link as any, params: route.params });
    } else if (onPress) {
      onPress();
    }
  };

  const baseStyles = "w-full py-3 rounded-md items-center justify-center";

  const typeStyles = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${baseStyles} ${type === "primary" ? "bg-blue-600" : "bg-gray-200"}`}
      {...rest}
    >
      <Text
        className={`text-base font-medium ${
          type === "primary" ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
