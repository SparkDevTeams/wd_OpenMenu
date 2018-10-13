import React from "react";
import RecipeCard from "../Menu/RecipeCard";
import { Link } from "react-router-dom";

const MenuBrowserPV = props => {
  return (
    <div>
      <Link to="/menus/menu">
        <RecipeCard />
      </Link>
    </div>
  );
};

export default MenuBrowserPV;
