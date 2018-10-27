import React, { Component } from "react";
import RecipeV from "./RecipeV";
import RecipeA from "./../../store/actions/RecipeA";
import { connect } from "react-redux";
import axios from "axios";

// const recipeID = "1539371834732MushroomSausageRaguuser1";

class RecipeC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openEditDialog: false,
      recipe_name: "",
      image: "", //contain rurl
      recipe: {},
      ingredients: [], //contain itemId
      instructions: "",
      currentIngredient: "",
      currentIngredientAmount: "",
      image_form: "",
      image_name: ""
    };
  }

  handleEditClickOpen = () => {
    this.setState({
      openEditDialog: true
    });
  };

  handleClose = () => {
    this.setState({
      openEditDialog: false,
      currentIngredient: "",
      currentIngredientAmount: ""
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
    console.log("hit updateRecipe");
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
    console.log(recipeInfo);
    this.props.recipeFn.updateRecipe({
      recipeInfo: recipeInfo,
      id: this.state.recipe.id
    });
    // this.sendImg();
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

  generateId = (name, user) => {
    let newName = name.replace(/\W/g, "");
    let newUser = user.replace(/\W/g, "");

    let date = Date.now();

    let id = date + newName + newUser;

    return id;
  };

  componentWillMount() {
    let returnRecipe = this.props.userRecipes.filter(recipe => {
      return recipe.uid === this.props.match.params.id;
    });
    returnRecipe = returnRecipe[0];

    this.setState({
      recipe_name: returnRecipe.name,
      recipe: returnRecipe,
      ingredients: returnRecipe.ingredients,
      image_name: returnRecipe.image,
      instructions: returnRecipe.instructions
    });

    // console.log(this.state.ingredients);
  }

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
    return (
      <div>
        <RecipeV
          recipe={this.state.recipe}
          userItems={this.props.userItems}
          openEditDialog={this.state.openEditDialog}
          handleEditClickOpen={this.handleEditClickOpen}
          handleCloseDialog={this.handleClose}
          handleOnChangeForm={this.handleOnChangeForm}
          handleAddItem={this.handleAddItem}
          currentIngredient={this.state.currentIngredient}
          currentIngredientAmount={this.state.currentIngredientAmount}
          handleIngredientForm={this.handleIngredientForm}
          updateRecipe={this.updateRecipe}
          ingredients={this.state.ingredients}
          recipe_name={this.state.recipe_name}
          image_name={this.state.image_name}
          sendImg={this.sendImg}
          setImageForm={this.setImageForm}
          setImageName={this.setImageName}
        />
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
