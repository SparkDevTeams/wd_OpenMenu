import React from "react";

import RecipeDetailV from "./RecipeDetailV";
import ItemCard from "./../../components/Item/ItemC";

import Dialog from "@material-ui/core/Dialog";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RecipeAddItemM from "./RecipeAddItemM";
import RecipeEditRecipeM from "./RecipeEditRecipeM";

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

      <RecipeDetailV
        name={props.recipe.name}
        image={props.recipe.image}
        instructions={props.recipe.instructions}
      />
      <h1>Ingredients</h1>
      {/* Show list of ingredients */}
      {props.recipe.ingredients.length > 0
        ? props.recipe.ingredients.map(item => {
            return <ItemCard itemId={item.itemId} amount={item.amount} />;
          })
        : console.log("No ingredient. Add some")}
      {/* Add recipe */}
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
        <Button
          margin-left="20px"
          variant="fab"
          color="secondary"
          aria-label="Edit"
          onClick={props.handleOpenDialog}
        >
          <Icon>edit_icon</Icon>
        </Button>
        <Dialog
          open={props.openDialog}
          onClose={props.handleCloseDialog}
          aria-labelledby="form-dialog-title"
        >
          {props.addButtonClicked && <RecipeAddItemM recipe={props.recipe} />}
          {props.editButtonClicked && <RecipeEditRecipeM />}
        </Dialog>
      </div>
    </div>
  );
};

export default RecipeV;
