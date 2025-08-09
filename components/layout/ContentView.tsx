import { View } from "react-native";
import TopHeader from "@components/layout/TopHeader";

const ContentView = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="bg-neutral-300 h-full">
      <TopHeader />
      {children}
    </View>
  );
};

export default ContentView;
