import React, { Component } from "react";
import { connect } from "react-redux";
import HomePV from "./HomePV";

import MenuA from "../../store/actions/MenuA";
import ItemA from "../../store/actions/ItemA";
import RecipeA from "../../store/actions/RecipeA";

/**
 * Description:
 * This is the Home route. Land here after login.
 * Displays recent Menu's, Recipe's, Items.
 *
 * Input: None
 *
 * Output:
 *  - Writes to local storage:
 *  -- user
 *  -- userId
 *  -- token
 *
 * Components used:
 *  - RecentC: Sends list of recent Menu, Recipe, Item objects
 *
 * Local State:
 *  - None
 *
 * Central store:
 *  - userItems: Stores list of Item objects from DB
 *  - userMenus: Stores list of Menu objects from DB
 *  - userItems: Stores list of Item objects from DB
 *
 * Todo:
 *  - Figure out if getting images should be done here and if so, how?
 *  - Implement the RecentC
 */
class HomePC extends Component {
  componentDidMount() {
    this.props.recipeFn.getRecipes();
    this.props.menuFn.getMenus();
    this.props.itemFn.getItems();
  }

  render() {
    return (
      <HomePV
        recipes={this.props.userRecipes}
        menus={this.props.userMenus}
        items={this.props.userItems}
        recipeImages={this.props.userRecipeImages}
        loadRecipeImages={this.loadRecipeImages}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userRecipes: state.RecipeR.userRecipes,
    userMenus: state.MenuR.userMenus,
    userItems: state.ItemR.userItems,
    userRecipeImages: state.RecipeR.recipeImages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recipeFn: RecipeA(dispatch),
    menuFn: MenuA(dispatch),
    itemFn: ItemA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePC);
