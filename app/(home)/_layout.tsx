import {
  CalendarIcon,
  FinanceIcon,
  SettingsIcon,
  StudentIcon,
} from "@components/icons";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native";

const HomeLayoutWrapper = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFB" }}>
      <Tabs
        initialRouteName="agenda"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 52,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 0,
            backgroundColor: "#F8FAFB",
          },
          tabBarIconStyle: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Tabs.Screen
          name="agenda"
          options={{
            headerShown: false,
            title: "Agenda",
            tabBarIcon: ({ focused }) => (
              <CalendarIcon
                variant={focused ? "solid" : "outline"}
                className={focused ? "text-primary" : "text-neutral-700"}
                width={20}
                height={20}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="agreements"
          options={{
            headerShown: false,
            title: "Agreements",
            tabBarIcon: ({ focused }) => (
              <StudentIcon
                variant={focused ? "solid" : "outline"}
                className={focused ? "text-primary" : "text-neutral-700"}
                width={20}
                height={20}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="finance"
          options={{
            headerShown: false,
            title: "Finance",
            tabBarIcon: ({ focused }) => (
              <FinanceIcon
                variant={focused ? "solid" : "outline"}
                className={focused ? "text-primary" : "text-neutral-700"}
                width={20}
                height={20}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <SettingsIcon
                variant={focused ? "solid" : "outline"}
                className={focused ? "text-primary" : "text-neutral-700"}
                width={20}
                height={20}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default HomeLayoutWrapper;
