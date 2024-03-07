import { useFonts } from "expo-font";
import { Text } from "theme/text.theme";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { RecipeCardListScreen } from "features/recipes/screens/recipe-card-list.screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand: require("./assets/fonts/quicksand.ttf"),
    MadimiOne: require("./assets/fonts/MadimiOne.ttf"),
  });
  return (
    fontsLoaded && (
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 48 }}>BHOJAN</Text>
        <Text style={{ fontSize: 18, marginBottom: 20 }}>
          Cook twice a day 😤
        </Text>
        <StatusBar style="auto" />
        <RecipeCardListScreen />
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
