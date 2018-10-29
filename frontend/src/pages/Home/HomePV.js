import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MenuCard from "../../components/Menu/MenuCard";
import RecipeCardV from "../../components/Recipe/RecipeCardV";
import ItemCard from "./../../components/Item/ItemC";
import "./style.css";
const styles = {
  root: {
    flexGrow: 1
  }
};

const HomePV = props => {
  const { classes } = props;
  let containerSpacing = 12;
  let itemSpacing = 12;
  let cardSpacing = 16;
  let menu_cardRowWidth = 4;
  let recipe_cardRowWidth = 5;
  let items_cardRowWidth = 6;

  return (
    // This part need better styling
    <Grid container spacing={containerSpacing}>
      <Grid item xs={itemSpacing}>
        <h1>Menus</h1>
        <Grid container spacing={cardSpacing}>
          {props.userMenus.map(menu => (
            <Grid key={menu.uid} item xs={menu_cardRowWidth}>
              <Link
                className={classes.cardStyle}
                to={{ pathname: "/menus/" + menu.uid }}
              >
                <MenuCard menu={menu} />
              </Link>
            </Grid>
          ))}
        </Grid>

        <h1>Recipes</h1>
        <Grid container spacing={cardSpacing}>
          {props.userRecipes.map(recipe => (
            <Grid key={recipe.uid} item xs={recipe_cardRowWidth}>
              <Link
                className={classes.cardStyle}
                to={{ pathname: "/recipes/" + recipe.uid }}
              >
                <RecipeCardV recipe={recipe} large={false} />
              </Link>
            </Grid>
          ))}
        </Grid>

        <h1>Items</h1>
        <Grid container spacing={cardSpacing}>
          {props.userItems.map(item => (
            <Grid key={item.uid} item xs={items_cardRowWidth}>
              <ItemCard itemId={item.uid} amount={0.0} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(HomePV);
