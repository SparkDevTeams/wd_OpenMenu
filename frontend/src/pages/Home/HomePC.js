import React, { Component } from "react";
import { connect } from "react-redux";
import HomePV from "./HomePV";

import MenuA from "../../store/actions/MenuA";
import ItemA from "../../store/actions/ItemA";
import RecipeA from "../../store/actions/RecipeA";

class HomePC extends Component {
  componentWillMount() {
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
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userRecipes: state.RecipeR.userRecipes,
    userMenus: state.MenuR.userMenus,
    userItems: state.ItemR.items
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
