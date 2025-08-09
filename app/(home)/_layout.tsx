import AgreementIcon from "@components/icons/AgreementIcon";
import CalendarIcon from "@components/icons/CalendarIcon";
import SettingsIcon from "@components/icons/SettingsIcon";
import StudentIcon from "@components/icons/StudentIcon";
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
              <AgreementIcon
                variant={focused ? "solid" : "outline"}
                className={focused ? "text-primary" : "text-neutral-700"}
                width={20}
                height={20}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="students"
          options={{
            headerShown: false,
            title: "Students",
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
