import React from "react";
import RecipeCard from "./../../components/Recipe/ItemCardV";
import "./style.css";

const HomePV = props => {
  return (
    // This part need better styling
    <div>
      <h1>Recipes</h1>
      <div className="container">
        {props.recipes.map(recipe => (
          <div className="card">
            <RecipeCard name={recipe.name} />
          </div>
        ))}
      </div>
      <h1>Menus</h1>
      <div className="container">
        {props.menus.map(menu => (
          <div className="card">
            <RecipeCard name={menu.name} />
          </div>
        ))}
      </div>
      <h1>Items</h1>
      <div className="container">
        {props.items.map(item => (
          <div className="card">
            <RecipeCard name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePV;
