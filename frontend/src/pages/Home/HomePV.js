import React from "react";
import { Link } from "react-router-dom";

import RecipeCardV from "../../components/Recipe/RecipeCardV";
import MenuCard from "../../components/Menu/MenuCard";

import "./style.css";

const HomePV = props => {
  return (
    // This part need better styling
    <div>
      <h1>Menus</h1>
      <div className="container">
        {props.userMenus.map(menu => (
          <div class="card">
            <Link to={{ pathname: "/menus/" + menu.uid }}>
              <MenuCard menu={menu} />
            </Link>
          </div>
        ))}
      </div>

      <h1>Recipes</h1>
      <div className="container">
        {props.userRecipes.map(recipe => (
          <div className="card">
            <Link to={{ pathname: "/recipes/" + recipe.uid }}>
              <RecipeCardV recipe={recipe} showIns={false} />
            </Link>
          </div>
        ))}
      </div>
      <h1>Items</h1>
      <div className="container">
        {props.userItems.map(item => (
          <div className="card">
            <RecipeCardV recipe={item} showIns={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePV;
