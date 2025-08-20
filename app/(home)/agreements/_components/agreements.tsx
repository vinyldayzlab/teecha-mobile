import SearchBar from "@components/SearchBar";
import { useCallback, useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";

export const AgreementsRoute = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View className="flex-1">
      <SearchBar placeholder="Search by student name" />
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text> Teste </Text>
        <Text> Teste </Text>
        <Text> Teste </Text>
        <Text> Teste </Text>
        <Text> Teste </Text>
        <Text> Teste </Text>
      </ScrollView>
    </View>
  );
};
