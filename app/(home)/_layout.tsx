import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native";
import { usePathname } from "expo-router";
import { use, useEffect } from "react";

const HomeLayoutWrapper = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log("Current route:", pathname);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        initialRouteName="agenda"
        screenOptions={{ tabBarShowLabel: false }}
      >
        <Tabs.Screen
          name="agenda"
          options={{ headerShown: false, title: "Agenda" }}
        />
        <Tabs.Screen
          name="agreements"
          options={{ headerShown: false, title: "Agreements" }}
        />
        <Tabs.Screen
          name="students"
          options={{ headerShown: false, title: "Students" }}
        />
        <Tabs.Screen
          name="profile"
          options={{ headerShown: false, title: "Profile" }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default HomeLayoutWrapper;
