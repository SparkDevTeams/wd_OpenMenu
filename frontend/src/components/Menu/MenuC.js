import React, { Component } from "react";
import MenuV from "./MenuV";
import MenuA from "../../store/actions/MenuA";
import { connect } from "react-redux";

const menuID = "1539372364811ItaliansFavoritesuser1";

class MenuC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuID: "1539372364811ItaliansFavoritesuser1",
      openRecipeDialog: false,
      name: "Italian Favorites",
      user: "user1",
      recipes: [],
      uid: "",
      lastAccessed: "",
      currentMenu: {}
    };
  }

  componentDidMount() {
    let userMenu = this.props.userMenus.filter(menu => {
      // console.log(item.uid, " " + this.props.itemId);
      return menu.uid === "1539372364811ItaliansFavoritesuser1";
    });

    this.setState({
      currentMenu: userMenu
    });
  }

  handleOpenDialog = () => {
    this.setState({ openRecipeDialog: true });
    console.log("open");
  };

  handleCloseDialog = () => {
    this.setState({ openRecipeDialog: false });
  };

  render() {
    let userMenu = this.props.userMenus.filter(menu => {
      console.log(menu);
      return menu.uid === "1539372364811ItaliansFavoritesuser1";
    });
    //userMenu = userMenu[0];
    return (
      <MenuV
        name={userMenu.name}
        menuName={this.state.name}
        menus={this.props.userMenus}
        openDialog={this.state.openRecipeDialog}
        handleOpen={this.handleOpenDialog}
        handleClose={this.handleCloseDialog}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    userMenus: state.MenuR.userMenus
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
)(MenuC);
