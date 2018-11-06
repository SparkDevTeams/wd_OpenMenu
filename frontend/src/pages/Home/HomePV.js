import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import MenuCard from "../../components/Menu/MenuCard";
import RecipeCardV from "../../components/Recipe/RecipeCardV";
import ItemCard from "./../../components/Item/ItemC";
import "./style.css";

const HomePV = props => {
  return (
    <div>
      <h1>Menus</h1>
      <Grid className="container-cards" container spacing={40}>
        {props.userMenus.map(menu => (
          <Grid item xs={12} md={4} xl={3}>
            <Link to={{ pathname: "/menus/" + menu.uid }}>
              <MenuCard menu={menu} />
            </Link>
          </Grid>
        ))}
      </Grid>

      <h1>Recipes</h1>
      <Grid className="container-cards" container spacing={40}>
        {props.userRecipes.map(recipe => (
          <Grid item xs={12} md={4} xl={3}>
            <Link
              // className={classes.cardStyle}
              to={{ pathname: "/recipes/" + recipe.uid }}
            >
              <RecipeCardV recipe={recipe} large={false} />
            </Link>
          </Grid>
        ))}
      </Grid>
      <h1>Items</h1>
      <Grid className="container-cards" container spacing={40}>
        {props.userItems.map(item => (
          <Grid item xs={12} md={4} xl={3}>
            <ItemCard itemId={item.uid} amount={0.0} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePV;
