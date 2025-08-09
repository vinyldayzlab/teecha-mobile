import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

const AuthLayoutWrapper = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Slot />
    </SafeAreaView>
  );
};

export default AuthLayoutWrapper;
