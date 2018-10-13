import React, { Component } from "react";
import RecipeV from "./RecipeV";
// import RecipeA from "./../../store/actions/RecipeA";
import { connect } from "react-redux";

const recipeID = "1539371834732MushroomSausageRaguuser1";

class RecipeC extends Component {
  state = {
    openAddItemDialog: false,
    itemName: ""
  };

  handleClickOpen = () => {
    this.setState({ openAddItemDialog: true });
  };

  handleClose = () => {
    this.setState({ openAddItemDialog: false });
  };

  editItemDetails = e => {
    let field = e.target.name;
    let value = e.target.value;

    switch (field) {
      case "name":
        this.setState({
          newName: value
        });
        break;

      default:
        break;
    }
    console.log(this.state.newName);
  };

  render() {
    return (
      <div>
        {this.props.userRecipes
          .filter(recipe => {
            return recipe.uid === recipeID;
          })
          .map(returnRecipe => {
            return (
              <RecipeV
                recipe={returnRecipe}
                openDialog={this.state.openAddItemDialog}
                handleOpenDialog={this.handleClickOpen}
                handleCloseDialog={this.handleClose}
                editItemDetails={this.editItemDetails}
              />
            );
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
