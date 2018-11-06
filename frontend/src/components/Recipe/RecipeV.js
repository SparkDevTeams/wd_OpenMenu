import React from "react";

import RecipeCardV from "./RecipeCardV";
import ItemCard from "./../../components/Item/ItemC";

import Dialog from "@material-ui/core/Dialog";
// import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import RecipeEditRecipeM from "./RecipeEditRecipeM";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import "./style.css";

const RecipeV = props => {
  return (
    <div>
      {/* show detail of recipe */}
      <div id="recipe-details-container">
        <RecipeCardV recipe={props.recipe} large={true} />
      </div>
      <h1>Ingredients</h1>

      {/* Add recipe */}
      <div>
        <Button
          // style={styles.bttn}
          id="add-ingredient-button"
          margin-left="20px"
          variant="fab"
          color="secondary"
          aria-label="Edit"
          onClick={props.handleEditClickOpen}
        >
          <IconButton color="inherit" onClick={props.handleEditClickOpen}>
            <EditIcon />
          </IconButton>
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
      <Grid id="recipe-container" container spacing={40}>
        {props.ingredients.length > 0
          ? props.recipe.ingredients.map(item => {
              for (let i = 0; i < props.userItems.length; i++) {
                if (item.itemId === props.userItems[i].uid) {
                  // console.log(item.itemId);
                  return (
                    <Grid xs={12} item md={4}>
                      <ItemCard
                        key={item.itemId}
                        itemId={item.itemId}
                        amount={item.amount}
                      />
                    </Grid>
                  );
                }
              }
              return 0;
            })
          : console.log("No ingredient. Add some")}
      </Grid>
    </div>
  );
};

export default RecipeV;
