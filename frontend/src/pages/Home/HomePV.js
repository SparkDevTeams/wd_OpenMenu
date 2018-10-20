import React from "react";
import RecipeCardV from "./../../components/Recipe/ItemCardV";

const HomePV = props => {
  return (
    // This part need better styling
    <div>
      <h1>Recipes</h1>
      {/* {props.loadRecipeImages("mauricio__10_18_2018_1_46_03.jpg")} */}
      {props.recipes.map(recipe => {
        //
        return <RecipeCardV name={recipe.name} />;
      })}
      <h1>Menus</h1>
      {props.menus.map(menu => (
        <RecipeCardV name={menu.name} />
      ))}
      <h1>Items</h1>
      {props.items.map(item => (
        <RecipeCardV name={item.name} />
      ))}
    </div>
  );
};

export default HomePV;
