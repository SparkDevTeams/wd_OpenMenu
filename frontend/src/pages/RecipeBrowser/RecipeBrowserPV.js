import React from "react";
import { Link } from "react-router-dom";
import RecipeCardV from "./../../components/Recipe/RecipeCardV";

import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RecipeBrowserM from "./RecipeBrowserM";
import Grid from "@material-ui/core/Grid";

const RecipeBrowserPV = props => {
  return (
    <div>
      <div>
        <Button
          // style={styles.bttn}
          margin-left="20px"
          variant="fab"
          color="secondary"
          aria-label="Add"
          onClick={props.handleOpenDialog}
        >
          <AddIcon />
        </Button>
        <h1>Recipes</h1>
      </div>
      <Grid container spacing={16}>
        <Grid item xs={8}>
          <Grid container spacing={16}>
            {props.userRecipes.map(recipe => (
              <Grid key={recipe.uid} item xs={6}>
                <Link to={{ pathname: "/recipes/" + recipe.uid }}>
                  <RecipeCardV recipe={recipe} large={false} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={props.openDialog}
        onClose={props.handleCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <div onClick={props.handleCloseDialog}>
          <CloseIcon />
        </div>
        <RecipeBrowserM
          openDialog={props.openDialog}
          handleOpenDialog={props.handleOpenDialog}
          handleCloseDialog={props.handleCloseDialog}
          handleOnChangeForm={props.handleOnChangeForm}
          userItems={props.userItems}
          handleIngredientForm={props.handleIngredientForm}
          addNewRecipe={props.addNewRecipe}
          ingredients={props.ingredients}
          handleAddItem={props.handleAddItem}
          currentIngredient={props.currentIngredient}
          currentIngredientAmount={props.currentIngredientAmount}
          recipe_name={props.recipe_name}
          image_name={props.image_name}
          sendImg={props.sendImg}
          setImageForm={props.setImageForm}
          setImageName={props.setImageName}
        />
      </Dialog>
    </div>
  );
};

export default RecipeBrowserPV;
