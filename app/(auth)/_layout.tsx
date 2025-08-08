import { Slot, Stack } from "expo-router";
import { ImageBackground, View } from "react-native";
import backgroundImage from "@assets/images/chalkboard.jpg";
import { StatusBar } from "expo-status-bar";

const AuthLayoutWrapper = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      className="flex-1 justify-center items-center"
    >
      <StatusBar style="light" />
      <View className="flex-1 bg-black/30">
        <Slot />
      </View>
    </ImageBackground>
  );
};

export default AuthLayoutWrapper;
