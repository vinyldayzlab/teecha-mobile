import { Text, SafeAreaView, StyleSheet, Image } from "react-native";
import logo from "@assets/images/icon.png";

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={logo} />
      <Text>an experiment of Vinyl Dayz Laboratories ®</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
});
