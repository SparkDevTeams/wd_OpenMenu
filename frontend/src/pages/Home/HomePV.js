import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MenuCard from "../../components/Menu/MenuCard";
import RecipeCardV from "../../components/Recipe/RecipeCardV";
import ItemCard from "./../../components/Item/ItemC";
import "./style.css";

const HomePV = props => {
  const { classes } = props;

  const styles = {
    "margin-left": 15
  };

  return (
    <div>
      <h1>Menus</h1>
      <div className="container">
        {props.userMenus.map(menu => (
          <Link to={{ pathname: "/menus/" + menu.uid }}>
            <div className="card">
              <MenuCard menu={menu} />
            </div>
          </Link>
        ))}
      </div>

      <h1>Recipes</h1>
      <div className="container">
        {props.userRecipes.map(recipe => (
          <Link
            // className={classes.cardStyle}
            to={{ pathname: "/recipes/" + recipe.uid }}
          >
            <div className="card recipe">
              <RecipeCardV recipe={recipe} large={false} />
            </div>
          </Link>
        ))}
      </div>
      <h1>Items</h1>
      <div style={styles} className="container">
        {props.userItems.map(item => (
          <div className="card">
            <ItemCard itemId={item.uid} amount={0.0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePV;
