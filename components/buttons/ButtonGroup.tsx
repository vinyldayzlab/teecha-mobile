import { View } from "react-native";
import Button, { ButtonProps } from "./Button";
import { spacingVariants } from "constants/spacing";

type AtLeastTwo<T> = [T, T, ...T[]];

type ButtonGroupProps = {
  buttons: AtLeastTwo<ButtonProps>;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  if (buttons.length < 2) {
    throw new Error("ButtonGroup requires at least 2 buttons");
  }

  return (
    <View className={`w-full flex flex-col ${spacingVariants.buttonGroup}`}>
      {buttons.map((buttonProps, index) => (
        <Button key={index} {...buttonProps} />
      ))}
    </View>
  );
};

export default ButtonGroup;
