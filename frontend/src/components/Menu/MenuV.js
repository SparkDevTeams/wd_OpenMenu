import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

import MenuCard from "./MenuCard";
import RecipeCardV from "../Recipe/RecipeCardV";

const styles = {
  "@media (min-width: 1024px)": {
    cardContainer: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      gridTemplateRows: "auto auto auto"
    },
    cardStyle: {
      justifySelf: "center",
      marginBottom: "2%"
    },
    mainContainer: {
      //height: 800
    },
    header: {
      textAlign: "center"
    },
    card: {
      width: 500,
      marginRight: 60
    },
    menuDetails: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 100
    },
    menuInfo: {
      marginRight: 70
    },
    media: {
      height: 200
    },
    recipeRow: {
      display: "flex",
      flexDirection: "row"
    },
    addRecipeButton: {
      position: "absolute",
      right: 0
      //bottom: theme.spacing.unit * 2,
      //right: theme.spacing.unit * 3
    }
  }
};

const MenuV = props => {
  const { classes } = props;
  return (
    <div className={classes.mainContainer}>
      <div className={classes.menuDetails}>
        <Card className={classes.card}>
          <MenuCard menu={props.menu} large={true} />
        </Card>
      </div>
      <div className={classes.cardContainer}>
        <h2>Recipes: </h2>
        {/* Show list of ingredients, only if they actually exist */}
        {props.menuRecipes.length > 0 ? (
          props.menuRecipes.map(recipe => {
            for (let i = 0; i < props.menuRecipes.length; i++) {
              if (recipe.uid === props.menuRecipes[i].uid) {
                // console.log(item.itemId);
                return (
                  <Link
                    className={classes.cardStyle}
                    key={recipe.uid}
                    to={{ pathname: "/recipes/" + recipe.uid }}
                  >
                    <RecipeCardV recipe={recipe} />
                  </Link>
                );
              }
            }
          })
        ) : (
          <h3>No recipes found. Add some using the add button.</h3>
        )}
      </div>
      <div>
        <Tooltip title="Add recipe">
          <Button
            variant="fab"
            color="secondary"
            className={classes.addRecipeButton}
            /*className={classes.addRecipeButton}*/
            onClick={props.handleOpen}
            scroll="paper"
            aria-labelledby="addrecipes"
          >
            <AddIcon />
          </Button>
        </Tooltip>
        <Dialog open={props.openDialog} onClose={props.handleClose}>
          <DialogTitle id="addrecipes">Add Recipes</DialogTitle>
          <DialogContent>
            {/* <RecipeCard />
            <RecipeCard />
            <RecipeCard /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} color="primary">
              Add Recipe(s)
            </Button>
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default withStyles(styles)(MenuV);
