import { colors } from "@lib/theme";
import { AgreementsRoute, StudentsRoute } from "./_components";
import { JSX, useState } from "react";
import { TabView, TabBar } from "react-native-tab-view";
import ContentView from "@components/layout/ContentView";

type RouteKey = "agreements" | "students";

const renderScene: Record<RouteKey, () => JSX.Element> = {
  agreements: AgreementsRoute,
  students: StudentsRoute,
};

const routes: { key: RouteKey; title: string }[] = [
  { key: "agreements", title: "Agreements" },
  { key: "students", title: "Students" },
];

const Agreements = () => {
  const [index, setIndex] = useState(0);

  return (
    <ContentView>
      <TabView
        navigationState={{ index, routes }}
        renderScene={({ route }) => renderScene[route.key]()}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.primary }}
            style={{ backgroundColor: colors.neutral[300] }}
            activeColor={colors.primary}
            inactiveColor={colors.neutral[700]}
          />
        )}
      />
    </ContentView>
  );
};

export default Agreements;
