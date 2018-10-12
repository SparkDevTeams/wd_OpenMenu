import React from "react";
import RecipeCard from "./../../components/Recipe/ItemCardV";

const HomePV = props => {
  return (
    <div>
      <h1>Home Page!</h1>
      {props.recipes.map(recipe => (
        <h1>{recipe.name}</h1>
      ))}
      <RecipeCard name={props.recipes.name} />
    </div>
  );
};

export default HomePV;
