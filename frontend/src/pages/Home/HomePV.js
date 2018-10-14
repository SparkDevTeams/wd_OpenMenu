import React from "react";
import RecipeCard from "./../../components/Recipe/ItemCardV";

const HomePV = props => {
  return (
    // This part need better styling
    <div>
      <h1>Recipes</h1>
      {props.recipes.map(recipe => (
        <RecipeCard name={recipe.name} />
      ))}
      <h1>Menus</h1>
      {props.menus.map(menu => (
        <RecipeCard name={menu.name} />
      ))}
      <h1>Items</h1>
      {props.items.map(item => (
        <RecipeCard name={item.name} />
      ))}
    </div>
  );
};

export default HomePV;
