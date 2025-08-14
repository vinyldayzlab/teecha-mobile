import { View, Image } from "react-native";
import bgImage from "@assets/icons/teecha-black-text.png";
import { NotificationIcon } from "@components/icons";

const TopHeader = () => {
  return (
    <View className="flex flex-row items-center justify-between h-12 w-full pr-3">
      <Image source={bgImage} resizeMode="contain" className="h-12 w-32" />
      <View>
        <NotificationIcon />
      </View>
    </View>
  );
};

export default TopHeader;
