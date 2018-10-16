import React, { Component } from "react";
import MenuV from "./MenuV";
import MenuA from "../../store/actions/MenuA";
import { connect } from "react-redux";

class MenuC extends Component {
  constructor(props) {
    super();
    this.state = {
      openRecipeDialog: false
    };
  }
  handleOpenDialog = () => {
    this.setState({ openRecipeDialog: true });
    console.log("open");
  };

  handleCloseDialog = () => {
    this.setState({ openRecipeDialog: false });
  };

  render() {
    return (
      <MenuV
        menus={this.props.userMenus}
        openDialog={this.state.openRecipeDialog}
        handleOpen={this.handleOpenDialog}
        handleClosed={this.handleCloseDialog}
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
