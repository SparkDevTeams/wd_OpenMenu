import React, { Component } from "react";
import RecipeBrowserPV from "./RecipeBrowserPV";

class RecipeBrowserPC extends Component {
  state = {
    openAddItemDialog: false
  };

  handleClickOpen = () => {
    this.setState({ openAddItemDialog: true });
  };

  handleClose = () => {
    this.setState({ openAddItemDialog: false });
  };

  render() {
    return (
      <RecipeBrowserPV
        openDialog={this.state.openAddItemDialog}
        handleOpenDialog={this.handleClickOpen}
        handleCloseDialog={this.handleClose}
      />
    );
  }
}

export default RecipeBrowserPC;
