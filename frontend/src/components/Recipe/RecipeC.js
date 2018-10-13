import React, { Component } from "react";
import RecipeV from "./RecipeV";
// import RecipeA from "./../../store/actions/RecipeA";
import { connect } from "react-redux";

const recipeID = "1539371834732MushroomSausageRaguuser1";

class RecipeC extends Component {
  addItem = () => {};
  render() {
    return (
      <div>
        {this.props.userRecipes
          .filter(recipe => {
            return recipe.uid === recipeID;
          })
          .map(returnRecipe => {
            return <RecipeV recipe={returnRecipe} onClick={this.addItem} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userRecipes: state.RecipeR.userRecipes
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeC);
