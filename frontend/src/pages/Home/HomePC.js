import React, { Component } from "react";
import { connect } from "react-redux";
import HomePV from "./HomePV";

import MenuA from "../../store/actions/MenuA";
import ItemA from "../../store/actions/ItemA";
import RecipeA from "../../store/actions/RecipeA";

class HomePC extends Component {
  componentDidMount() {
    this.props.recipeFn.getRecipes();
    this.props.menuFn.getMenus();
    this.props.itemFn.getItems();

    console.log(this.props.userRecipes);
    this.props.userRecipes.map(recipe => {
      this.props.recipeFn.getImage(recipe.image);
    });
  }
  // componentDidUpdate() {
  //   this.loadRecipeImages();
  // }

  // loadRecipeImages = () => {
  //   this.props.userRecipes.map(recipe => {
  //     this.props.recipeFn.getImage(recipe.image);
  //   });
  // };

  render() {
    return (
      <HomePV
        recipes={this.props.userRecipes}
        menus={this.props.userMenus}
        items={this.props.userItems}
        recipeImages={this.props.userRecipeImages}
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
