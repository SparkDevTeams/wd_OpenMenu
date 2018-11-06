import React, { Component } from "react";
import ShoppinglistPV from "./ShoppinglistPV";
import AddItemWindowM from "./AddItemWindowM";
import { connect } from "react-redux";

class ShoppinglistPC extends Component {
  constructor() {
    super();
    this.state = {
      addItemWindowVisibility: false,
      itemsChecked: true,
      recipesChecked: false,
      menusChecked: false,
      addedItems: []
    };
  }

  removeDuplicatesFromArray(array) {
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          array.splice(j, 1);
        }
      }
    }
    return array;
  }

  openAddItemWindow() {
    this.setState({
      addItemWindowVisibility: true
    });
  }
  closeAddItemWindow() {
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

  toggleMenusChecked() {
    this.setState({
      menusChecked: !this.state.menusChecked
    });
  }

  getAddedItems(added) {
    this.setState({
      addedItems: this.removeDuplicatesFromArray(
        this.state.addedItems.concat(added)
      )
    });
  }

  render() {
    let componentToReturn;

    let addedItemsWithAllInformation = [];

    this.props.userItems.forEach(item => {
      this.state.addedItems.forEach(added => {
        if (item.uid === added) {
          addedItemsWithAllInformation.push(item);
        }
      });
    });

    if (this.state.addItemWindowVisibility === true) {
      componentToReturn = (
        <div>
          <ShoppinglistPV
            openWindowFunction={this.openAddItemWindow.bind(this)}
            addedItems={addedItemsWithAllInformation}
          />
          <AddItemWindowM
            closeWindowFunction={this.closeAddItemWindow.bind(this)}
            items={this.props.userItems}
            itemsChecked={this.state.itemsChecked}
            toggleItemCheckFunction={this.toggleItemsChecked.bind(this)}
            recipes={this.props.userRecipes}
            recipesChecked={this.state.recipesChecked}
            toggleRecipeCheckFunction={this.toggleRecipesChecked.bind(this)}
            menus={this.props.userMenus}
            menusChecked={this.state.menusChecked}
            toggleMenuCheckFunction={this.toggleMenusChecked.bind(this)}
            getAddedItems={this.getAddedItems.bind(this)}
            addedItems={this.state.addedItems}
          />
        </div>
      );
    } else {
      componentToReturn = (
        <ShoppinglistPV
          openWindowFunction={this.openAddItemWindow.bind(this)}
          addedItems={addedItemsWithAllInformation}
        />
      );
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

export default connect(mapStateToProps)(ShoppinglistPC);
