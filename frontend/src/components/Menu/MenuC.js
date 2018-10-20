import React, { Component } from "react";
import MenuV from "./MenuV";
import MenuA from "../../store/actions/MenuA";
import { connect } from "react-redux";

class MenuC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openRecipeDialog: false,
      menu: null,
      menuRecipes: []
    };
  }

  componentWillMount() {
    let filteredItem = this.props.userMenus.filter(menu => {
      return menu.uid === this.props.match.params.id;
    });
    this.setState({ menu: filteredItem[0] });
  }

  componentDidMount() {
    console.log(this.state.menu.recipes.length);
    let rLen = this.state.menu.recipes.length;
    let count = 0;
    this.state.menu.recipes.map(r => {
      for (let i = 0; i < rLen; i++) {
        if (r.uid === this.props.userRecipes[i].uid) {
          console.log("Match!");
          this.setState(previousState => ({
            menuRecipes: [
              ...previousState.menuRecipes,
              this.props.userRecipes[i]
            ]
          }));
        }
        count++;
        if (rLen === count) break;
      }
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
    //userMenu = userMenu[0];
    return (
      <MenuV
        menu={this.state.menu}
        menuRecipes={this.state.menuRecipes}
        openRecipeDialog={this.state.openRecipeDialog}
        handleOpen={this.handleOpenDialog}
        handleClose={this.handleCloseDialog}
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
)(MenuC);
