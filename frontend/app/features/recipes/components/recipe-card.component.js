import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const RecipeCard = ({ recipe }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const unsub = async () => {
      const localRecipe = await AsyncStorage.getItem(recipe?.title);
      setCompleted(localRecipe);
    };
    return unsub;
  }, []);

  return (
    <View style={styles.card}>
      <BouncyCheckbox
        size={25}
        fillColor={"#00545a"}
        text={recipe?.title}
        onPress={(isChecked) => {
          setCompleted(isChecked);
        }}
        textStyle={{ fontSize: 28, fontFamily: "Quicksand" }}
        innerIconStyle={{ borderWidth: 3 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
