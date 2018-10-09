import React, { Component } from "react";
import MenuV from "./MenuV";
import MenuA from "../../store/actions/MenuA";
import { connect } from "react-redux";

class MenuC extends Component {
  render() {
    return <MenuV />;
  }
}
const mapStateToProps = state => {
  return {
    menus: state.MenuR.menus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    menuAction: MenuA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuC);
