import React, { Component } from "react";
import RecipeBrowserPV from "./RecipeBrowserPV";
import { connect } from "react-redux";
import RecipeA from "./../../store/actions/RecipeA";

class RecipeBrowserPC extends Component {
  state = {
    name: "",
    image: "", //contain rurl
    ingredients: [], //contain itemId
    instructions: "",
    openAddItemDialog: false,
    currentIngredient: "",
    currentIngredientAmount: ""
  };

  handleClickOpen = () => {
    this.setState({ openAddItemDialog: true });
  };

  handleClose = () => {
    this.setState({ openAddItemDialog: false });
  };

  handleOnChangeForm = e => {
    let field = e.target.name;
    let value = e.target.value;
    // console.log(e.target.value);

    switch (field) {
      case "name":
        this.setState({
          name: value
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

  handleIngredientForm = e => {
    let field = e.target.name;
    let value = e.target.value;

    switch (field) {
      case "ingredients":
        this.setState({
          currentIngredient: value
        });
        break;
      case "amount":
        this.setState({
          currentIngredientAmount: value
        });
        break;
      default:
        break;
    }
  };

  handleAddItem = () => {
    let newItem = {
      itemId: this.state.currentIngredient,
      amount: this.state.currentIngredientAmount
    };
    this.setState({
      ingredients: [...this.state.ingredients, newItem]
    });
    console.log(this.state.ingredients);
    // clear the current value
    this.setState({ currentIngredient: "", currentIngredientAmount: "" });
  };

  addNewRecipe = () => {
    const user = localStorage.getItem("user");
    const name = this.state.name;

    // uid is comming from tommy's pull request
    let recipeInfo = {
      name: name,
      user: user,
      image: this.state.image,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      uid: this.generateId(name, user)
    };
    // console.log(recipeInfo);
    this.props.recipeFn.createRecipe(recipeInfo);
  };

  generateId = (name, user) => {
    let newName = name.replace(/\W/g, "");
    let newUser = user.replace(/\W/g, "");

    let date = Date.now();

    let id = date + newName + newUser;

    return id;
  };

  render() {
    // console.log(this.props.userItems);
    return (
      <RecipeBrowserPV
        openDialog={this.state.openAddItemDialog}
        handleOpenDialog={this.handleClickOpen}
        handleCloseDialog={this.handleClose}
        handleOnChangeForm={this.handleOnChangeForm}
        userItems={this.props.userItems}
        userRecipes={this.props.userRecipes}
        handleIngredientForm={this.handleIngredientForm}
        addNewRecipe={this.addNewRecipe}
        ingredients={this.state.ingredients}
        handleAddItem={this.handleAddItem}
        currentIngredient={this.state.currentIngredient}
        currentIngredientAmount={this.state.currentIngredientAmount}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userItems: state.ItemR.userItems,
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
)(RecipeBrowserPC);
