import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import MenuBrowserPV from "./MenuBrowserPV";
import MenuA from "../../store/actions/MenuA";

/**
 * Description:
 * This is routed to from the main nav Menu link.
 * - Displays user menus as clickable tiles
 * - Create a new menu
 *
 * Input: None
 *
 * Output:
 *
 * Components used:
 *  - None
 *
 * Local State:
 *
 * Central store:
 *
 * Todo:
 *  - Improve styling
 *  - Filter menus by tags
 */
class MenuBrowserPC extends Component {
  state = {
    menu_name: "",
    image: "", //contain rurl
    addedRecipes: [], //recipe uid's
    description: "",
    addMenuModalOpenState: false,
    currentRecipe: "",
    image_form: "",
    image_name: ""
  };

  handleClickOpen = () => {
    this.setState({ addMenuModalOpenState: true });
  };

  handleClose = () => {
    this.setState({ addMenuModalOpenState: false });
  };

  handleOnChangeForm = e => {
    let field = e.target.name;
    let value = e.target.value;

    switch (field) {
      case "name":
        this.setState({
          menu_name: value
        });
        break;
      case "image":
        this.setState({
          image: value
        });
        break;
      case "description":
        this.setState({
          description: value
        });
        break;
      default:
        break;
    }
  };

  handleRecipeForm = e => {
    this.setState({
      currentRecipe: e.target.value
    });
  };

  handleAddRecipe = () => {
    let newRecipe = {
      uid: this.state.currentRecipe
    };
    this.setState({
      addedRecipes: [...this.state.addedRecipes, newRecipe]
    });
    this.setState({ currentRecipe: "" });
  };

  addNewMenu = () => {
    const user = localStorage.getItem("user");
    const menu_name = this.state.menu_name;

    // uid is comming from tommy's pull request
    let menuInfo = {
      name: menu_name,
      user: user,
      image: this.state.image_name,
      recipes: this.state.addedRecipes,
      description: this.state.description,
      last_accessed: Date.now(),
      created_date: Date.now(),
      uid: this.generateId(menu_name, user)
    };
    // console.log(menuInfo);
    this.sendImg();
    this.props.menuFn.createMenu(menuInfo);
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
    return (
      <MenuBrowserPV
        addMenuModalOpenState={this.state.addMenuModalOpenState}
        handleClickOpen={this.handleClickOpen}
        handleCloseDialog={this.handleClose}
        handleOnChangeForm={this.handleOnChangeForm}
        userMenus={this.props.userMenus}
        userRecipes={this.props.userRecipes}
        addedRecipes={this.state.addedRecipes}
        handleRecipeForm={this.handleRecipeForm}
        addNewMenu={this.addNewMenu}
        ingredients={this.state.ingredients}
        handleAddRecipe={this.handleAddRecipe}
        currentRecipe={this.state.currentRecipe}
        menu_name={this.state.menu_name}
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
    userMenus: state.MenuR.userMenus,
    userRecipes: state.RecipeR.userRecipes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    menuFn: MenuA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBrowserPC);
