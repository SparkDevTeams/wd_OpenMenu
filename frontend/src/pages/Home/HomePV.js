import React from "react";
import { Link } from "react-router-dom";

import RecipeCardV from "../../components/Recipe/ItemCardV";
import MenuCard from "../../components/Menu/MenuCard";

const HomePV = props => {
  return (
    // This part need better styling
    <div>
      <h1>Recipes</h1>
      {props.userRecipes.map(recipe => (
        <Link to={{ pathname: "/recipes/" + recipe.uid }}>
          <RecipeCardV recipe={recipe} />
        </Link>
      ))}

      <h1>Menus</h1>
      {props.userMenus.map(menu => (
        <Link to={{ pathname: "/menus/" + menu.uid }}>
          <MenuCard menu={menu} />
        </Link>
      ))}

      <h1>Items</h1>
      {props.userItems.map(item => (
        <RecipeCardV name={item.name} />
      ))}
    </div>
  );
};

export default HomePV;
