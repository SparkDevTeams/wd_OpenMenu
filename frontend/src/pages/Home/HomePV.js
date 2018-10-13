import React from "react";
import RecipeCard from "./../../components/Recipe/ItemCardV";

const HomePV = props => {
  return (
    <div>
      <h1>Menus</h1>
      {props.recipes.map(recipe => (
        <RecipeCard name={recipe.name} />
      ))}
      <h1>Menus</h1>
      {props.menus.map(menu => (
        <RecipeCard name={menu.name} />
      ))}
    </div>
  );
};

export default HomePV;
