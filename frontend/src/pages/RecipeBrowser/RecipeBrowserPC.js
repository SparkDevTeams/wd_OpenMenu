import React, { Component } from "react";
import RecipeBrowserPV from "./RecipeBrowserPV";
import { connect } from "react-redux";
import RecipeA from "./../../store/actions/RecipeA";
import axios from "axios";

class RecipeBrowserPC extends Component {
  state = {
    recipe_name: "",
    image: "", //contain rurl
    ingredients: [], //contain itemId
    instructions: "",
    openAddItemDialog: false,
    currentIngredient: "",
    currentIngredientAmount: "",
    image_form: "",
    image_name: ""
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
      ingredients: this.state.ingredients.concat(newItem)
    });
    console.log(this.state.ingredients);
    // clear the current value
    this.setState({ currentIngredient: "", currentIngredientAmount: "" });
  };

  addNewRecipe = () => {
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

  generateId = (name, user) => {
    let newName = name.replace(/\W/g, "");
    let newUser = user.replace(/\W/g, "");

    let date = Date.now();

    let id = date + newName + newUser;

    return id;
  };

  setImageForm = form => {
    this.setState({ image_form: form });
  };

  setImageName = name => {
    this.setState({ image_name: name });
  };

  sendImg = () => {
    // Post image to s3
    axios
      .post(process.env.REACT_APP_UPLOAD_IMG, this.state.image_form)
      .then(res => {
        console.log(res.body);
      })
      .catch(err => {
        console.log(err);
      });
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
        recipe_name={this.state.recipe_name}
        image_name={this.state.image_name}
        sendImg={this.sendImg}
        setImageForm={this.setImageForm}
        setImageName={this.setImageName}
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
