import React from "react";
import { FlatList } from "react-native";
import { RecipeCard } from "../components/recipe-card.component";

export const RecipeCardListScreen = ({}) => {
  const recipes = [
    {
      title: "Pasta",
    },
    {
      title: "Chicken Biryani",
    },
    {
      title: "Salmon & Rice",
    },
  ];

  return (
    <FlatList
      data={recipes}
      style={{ width: "100%" }}
      renderItem={({ item }) => <RecipeCard recipe={item} />}
    />
  );
};
