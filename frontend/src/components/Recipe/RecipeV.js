import React from "react";

import RecipeCardV from "./RecipeCardV";
import ItemCard from "./../../components/Item/ItemC";

import Dialog from "@material-ui/core/Dialog";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import RecipeEditRecipeM from "./RecipeEditRecipeM";

import "./style.css";

const styles = {
  bttn: {
    position: "absolute",
    right: 0
  }
};

const RecipeV = props => {
  return (
    <div>
      {/* show detail of recipe */}
      <RecipeCardV recipe={props.recipe} showIns={true} />
      <h1>Ingredients</h1>

      {/* Add recipe */}
      <div>
        <Button
          // style={styles.bttn}
          margin-left="20px"
          variant="fab"
          color="secondary"
          aria-label="Edit"
          onClick={props.handleEditClickOpen}
        >
          <Icon>edit_icon</Icon>
        </Button>
        <Dialog
          open={props.openEditDialog}
          onClose={props.handleCloseDialog}
          aria-labelledby="form-dialog-title"
        >
          <RecipeEditRecipeM
            userItems={props.userItems}
            recipe={props.recipe}
            handleOnChangeForm={props.handleOnChangeForm}
            handleCloseDialog={props.handleClose}
            handleAddItem={props.handleAddItem}
            currentIngredient={props.currentIngredient}
            currentIngredientAmount={props.currentIngredientAmount}
            updateRecipe={props.updateRecipe}
            handleIngredientForm={props.handleIngredientForm}
            ingredients={props.ingredients}
            recipe_name={props.recipe_name}
            image_name={props.image_name}
            sendImg={props.sendImg}
            setImageForm={props.setImageForm}
            setImageName={props.setImageName}
          />
        </Dialog>
      </div>

      {/* Show list of ingredients */}
      {props.ingredients.length > 0
        ? props.recipe.ingredients.map(item => {
            for (let i = 0; i < props.userItems.length; i++) {
              if (item.itemId === props.userItems[i].uid) {
                // console.log(item.itemId);
                return <ItemCard itemId={item.itemId} amount={item.amount} />;
              }
            }
          })
        : console.log("No ingredient. Add some")}
    </div>
  );
};

export default RecipeV;
