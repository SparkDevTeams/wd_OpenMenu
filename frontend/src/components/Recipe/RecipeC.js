import React, { Component } from "react";
import RecipeV from "./RecipeV";
import RecipeA from "./../../store/actions/RecipeA";
import { connect } from "react-redux";

class RecipeC extends Component {
  render() {
    return (
      <div>
        <RecipeV items={this.props.items} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.RecipeR.items
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
