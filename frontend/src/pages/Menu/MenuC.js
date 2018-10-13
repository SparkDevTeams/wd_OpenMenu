import React, { Component } from "react";
import MenuV from "./MenuV";
import MenuA from "../../store/actions/MenuA";
import { connect } from "react-redux";

class MenuC extends Component {
  render() {
    return <MenuV menus={this.props.userMenus} />;
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
