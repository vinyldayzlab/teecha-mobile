import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

const AgreementsLayout = ({ children }: { children: React.ReactNode }) => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AgreementsLayout;
