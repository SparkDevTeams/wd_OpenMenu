import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import MenuCard from "../../components/Menu/MenuCard";
import RecipeCardV from "../../components/Recipe/RecipeCardV";
import ItemCard from "./../../components/Item/ItemC";

const styles = {
  "@media (min-width: 1024px)": {
    cardContainer: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      gridTemplateRows: "auto auto auto"
    },
    cardStyle: {
      justifySelf: "center",
      marginBottom: 20
    },
    media: {
      height: 140
    }
  }
};

const HomePV = props => {
  const { classes } = props;
  return (
    // This part need better styling
    <div>
      {/*Page CSS*/}
      <h1>Menus</h1>
      <div className={classes.cardContainer}>
        {props.userMenus.map(menu => (
          <Link
            key={menu.uid}
            className={classes.cardStyle}
            to={{ pathname: "/menus/" + menu.uid }}
          >
            <MenuCard menu={menu} />
          </Link>
        ))}
      </div>
      <h1>Recipes</h1>
      <div className={classes.cardContainer}>
        {props.userRecipes.map(recipe => (
          <Link
            key={recipe.uid}
            className={classes.cardStyle}
            to={{ pathname: "/recipes/" + recipe.uid }}
          >
            <RecipeCardV recipe={recipe} showIns={false} />
          </Link>
        ))}
      </div>
      <h1>Items</h1>
      <div className={classes.cardContainer}>
        {props.userItems.map(item => (
          // <RecipeCardV key={item.uid} recipe={item} showIns={false} />
          <ItemCard key={item.uid} itemId={item.uid} amount={0.0} />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(HomePV);
