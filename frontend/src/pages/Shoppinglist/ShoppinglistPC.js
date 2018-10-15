import React, { Component } from "react";
import ShoppinglistPV from "./ShoppinglistPV";
import AddItemWindowM from "./AddItemWindowM";
import { connect } from "react-redux";

import MenuA from "../../store/actions/MenuA";
import ItemA from "../../store/actions/ItemA";
import RecipeA from "../../store/actions/RecipeA";

import HomePC from "../Home/HomePC";

class ShoppinglistPC extends Component {

  constructor() {
    super();
    this.state = {
      addItemWindowVisibility: false,
      itemsChecked: true,
      recipesChecked: false
    };
  }

  openAddItemWindow() {
    this.setState({
      addItemWindowVisibility: true
    });
  }
  closeAddItemWindow(){
    this.setState({
      addItemWindowVisibility: false
    });
  }

  toggleItemsChecked() {
    this.setState({
      itemsChecked: !this.state.itemsChecked
    });
  }

  toggleRecipesChecked() {
    this.setState({
      recipesChecked: !this.state.recipesChecked
    });
  }

  render() {
    let componentToReturn;
    if (this.state.addItemWindowVisibility === true) {
       componentToReturn = (
                          <div>
                            <ShoppinglistPV 
                            openWindowFunction={this.openAddItemWindow.bind(this)} />
                            <AddItemWindowM closeWindowFunction={this.closeAddItemWindow.bind(this)}

                            items={this.props.userItems} 
                            itemsChecked={this.state.itemsChecked} 
                            toggleItemCheckFunction={this.toggleItemsChecked.bind(this)}

                            recipes={this.props.userRecipes} 
                            recipesChecked={this.state.recipesChecked} 
                            toggleRecipeCheckFunction={this.toggleRecipesChecked.bind(this)}

                            />
                          </div>
                          );
    }
    else {
      
       componentToReturn = (<ShoppinglistPV 
                           openWindowFunction={this.openAddItemWindow.bind(this)}/>);
      

    }

   

    return componentToReturn;

    
  }
}

const mapStateToProps = state => {
  return {
    userRecipes: state.RecipeR.userRecipes,
    userMenus: state.MenuR.userMenus,
    userItems: state.ItemR.userItems
  };
};

export default connect(
  mapStateToProps
)(ShoppinglistPC);

