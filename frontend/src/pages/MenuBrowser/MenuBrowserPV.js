import React from "react";
import RecipeCardV from "../../components/Recipe/RecipeCardV";
import { Link } from "react-router-dom";

const MenuBrowserPV = props => {
  return (
    <div>
      <Link to="/menus/menu">
        <RecipeCardV />
      </Link>
    </div>
  );
};

export default MenuBrowserPV;
