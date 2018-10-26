import React from "react";
import { Link } from "react-router-dom";
import RecipeCardV from "./../../components/Recipe/RecipeCardV";

import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RecipeBrowserM from "./RecipeBrowserM";

const styles = {
  bttn: {
    position: "absolute",
    right: 0
  }
};

const RecipeBrowserPV = props => {
  return (
    <div>
      <h1>This is the Recipe page!</h1>
      {props.userRecipes.map(recipe => (
        <Link to={{ pathname: "/recipes/" + recipe.uid }}>
          <RecipeCardV recipe={recipe} showIns={false} />
        </Link>
      ))}

      <div>
        <Button
          style={styles.bttn}
          margin-left="20px"
          variant="fab"
          color="secondary"
          aria-label="Add"
          onClick={props.handleOpenDialog}
        >
          <AddIcon />
        </Button>

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
    </div>
  );
};

export default RecipeBrowserPV;
