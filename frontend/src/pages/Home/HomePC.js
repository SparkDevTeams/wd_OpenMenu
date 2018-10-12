import React, { Component } from "react";
import { connect } from "react-redux";
import HomePV from "./HomePV";

import MenuA from "../../store/actions/MenuA";
// import ItemA from "../../store/actions/ItemA";
import RecipeA from "../../store/actions/RecipeA";

class HomePC extends Component {
  componentWillMount() {
    this.props.recipeFn.getRecipes();
  }

  render() {
    return <HomePV recipes={this.props.userRecipes} />;
  }
}

const mapStateToProps = state => {
  return {
    userRecipes: state.RecipeR.userRecipes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recipeFn: RecipeA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePC);
