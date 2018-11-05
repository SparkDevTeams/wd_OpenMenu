import React from "react";
import "../../styles/ShoppinglistS.css";
import RecipeCard from "../../components/Recipe/ItemCardV";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import CardC from "./CardC";

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

  let menus = [];

  if (props.menusChecked) {
    menus = props.menus;
  } else {
    menus = [];
  }

  let totalNumberOfCards = props.recipes.length + props.items.length + props.menus; 

  let numberOfRows = 0;
  let numberOfColumns = 0;


  let checkedCards = [];

  

  function addNewChecked (checkedCard) {
    checkedCards.push(checkedCard); 
  }

  function removeUnchecked(uncheckedCard) {
    let index = checkedCards.indexOf(uncheckedCard);
    checkedCards.splice(index, 1); 
  }


  let itemElements = items.map(item => (
      <RecipeCard name={item.name} className="item-card" />
  ));
  let itemComponents = itemElements.map(itemElement => (
      <CardC card={itemElement} notifyChecked={addNewChecked} notifyUnchecked={removeUnchecked} checked={false}/>
  ));


  function handleClose() {
    props.getAddedItems(checkedCards);
    props.closeWindowFunction();
  }
  
  return (
    <div className="window-box">
      <div className="windowHeader">
        <div className="filering-container">
          <div className="menus-checkbox-container">
            <Checkbox
                checked={props.menusChecked}
                onChange={props.toggleMenuCheckFunction}
              />
            <p className="menus-filter-text">Menus</p>
          </div>
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
          onClick={handleClose}
        >
          <CloseIcon />
        </div>

      <div className="items-grid-container">
        <div className="items-grid">
          {itemComponents.map(item => (
            <div className="item-card-container">
              {item}
            </div>
          ))}
          {recipes.map(recipe => (
            <div className="item-card-container">
              <RecipeCard name={recipe.name} className="item-card" />
            </div>
          ))}
          {menus.map(menu => (
            <div className="item-card-container">
              <RecipeCard name={menu.name} className="item-card" />
            </div>
          ))}
        </div>
      </div>
     </div>
    </div>
  );
};

export default AddItemWindowM;
