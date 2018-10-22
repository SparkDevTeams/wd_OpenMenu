import React, { Component } from "react";
import RecipeV from "./RecipeV";
import RecipeA from "./../../store/actions/RecipeA";
import { connect } from "react-redux";

// const recipeID = "1539371834732MushroomSausageRaguuser1";

class RecipeC extends Component {
  state = {
    openEditDialog: false,
    recipe_name: "",
    image: "", //contain rurl
    ingredients: [], //contain itemId
    instructions: "",
    currentIngredient: "",
    currentIngredientAmount: "",
    image_form: "",
    image_name: ""
  };

  handleEditClickOpen = () => {
    this.setState({
      openEditDialog: true
    });
  };

  handleClose = () => {
    this.setState({
      openEditDialog: false
    });
  };

  handleAddItem = () => {
    let newItem = {
      itemId: this.state.currentIngredient,
      amount: this.state.currentIngredientAmount
    };
    this.setState({
      ingredients: this.state.ingredients.concat(newItem)
    });
    console.log(this.state.ingredients);
    // clear the current value
    this.setState({ currentIngredient: "", currentIngredientAmount: "" });
  };

  updateRecipe = () => {
    const user = localStorage.getItem("user");
    const recipe_name = this.state.recipe_name;

    // uid is comming from tommy's pull request
    let recipeInfo = {
      name: recipe_name,
      user: user,
      image: this.state.image_name,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      uid: this.generateId(recipe_name, user)
    };
    // console.log(recipeInfo);
    this.props.recipeFn.createRecipe(recipeInfo);
    this.sendImg();
    this.handleClose();
  };

  handleOnChangeForm = e => {
    let field = e.target.name;
    let value = e.target.value;
    // console.log(e.target.value);

    switch (field) {
      case "name":
        this.setState({
          recipe_name: value
        });
        break;
      case "image":
        this.setState({
          image: value
        });
        break;
      case "instruction":
        this.setState({
          instructions: value
        });
        break;

      default:
        break;
    }
  };

  generateId = (name, user) => {
    let newName = name.replace(/\W/g, "");
    let newUser = user.replace(/\W/g, "");

    let date = Date.now();

    let id = date + newName + newUser;

    return id;
  };

  render() {
    return (
      <div>
        {this.props.userRecipes
          .filter(recipe => {
            return recipe.uid === this.props.match.params.id;
          })
          .map(returnRecipe => {
            return (
              <RecipeV
                recipe={returnRecipe}
                userItems={this.props.userItems}
                openEditDialog={this.state.openEditDialog}
                handleEditClickOpen={this.handleEditClickOpen}
                handleCloseDialog={this.handleClose}
                handleOnChangeForm={this.handleOnChangeForm}
                handleAddItem={this.handleAddItem}
                currentIngredient={this.state.currentIngredient}
                currentIngredientAmount={this.state.currentIngredientAmount}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userRecipes: state.RecipeR.userRecipes,
    userItems: state.ItemR.userItems
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
)(RecipeC);
