import { View } from "react-native";

const ContentView = ({ children }: { children: React.ReactNode }) => {
  return <View className="bg-neutral-300 h-full">{children}</View>;
};

export default ContentView;
