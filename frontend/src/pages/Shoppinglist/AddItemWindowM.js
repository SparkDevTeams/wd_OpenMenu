import React from "react";
import "../../styles/ShoppinglistS.css";
import RecipeCard from "../../components/Recipe/ItemCardV";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";

const AddItemWindowM = props => {
  let recipes = [];

  if (props.recipesChecked) {
    recipes = props.recipes;
  } else {
    recipes = [];
  }

  let items = [];

  if (props.itemsChecked) {
    items = props.items;
  } else {
    items = [];
  }

  console.log(items);

  return (
    <div className="window-box">
      <div className="windowHeader">
        <div className="filering-container">
          <div className="menus-checkbox-container" />
          <div className="recipes-checkbox-container">
            <Checkbox
              checked={props.recipesChecked}
              onChange={props.toggleRecipeCheckFunction}
            />
            <p className="recipes-filter-text">Recipes</p>
          </div>
          <div className="items-checkbox-container">
            <Checkbox
              checked={props.itemsChecked}
              onChange={props.toggleItemCheckFunction}
            />
            <p className="items-filter-text">Items</p>
          </div>
        </div>
        <div
          className="close-icon-container"
          onClick={props.closeWindowFunction}
        >
          <CloseIcon />
        </div>
      </div>

      <div className="items-grid-container">
        <div className="items-grid">
          {items.map(item => (
            <div className="item-card-container">
              <RecipeCard name={item.name} className="item-card" />
            </div>
          ))}
          {recipes.map(recipe => (
            <div className="item-card-container">
              <RecipeCard name={recipe.name} className="item-card" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddItemWindowM;
