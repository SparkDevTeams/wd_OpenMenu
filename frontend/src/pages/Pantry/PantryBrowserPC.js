import React, { Component } from "react";
import { connect } from "react-redux";
import PantryBrowserPV from "./PantryBrowserPV";
import PantryBrowserM from "./PantryBrowserM";
import ItemA from "../../store/actions/ItemA";

class PantryBrowserPC extends Component {
  constructor() {
    super();
    this.state = {
      addItemWindowVisibility: false,
      newName: "name",
      newDescription: "description",
      newSize: "the biggest",
      newTags: "tag1,tag2",
      newPrice: "$1.00",
      newImageURL:
        "https://images-na.ssl-images-amazon.com/images/I/81LmTsA9JwL._SY355_.jpg"
    };
  }

  editItemDetails = e => {
    let field = e.target.name;
    let value = e.target.value;

    switch (field) {
      case "name":
        this.setState({
          newName: value
        });
        break;
      case "price":
        this.setState({
          newPrice: value
        });
        break;
      case "size":
        this.setState({
          newSize: value
        });
        break;
      case "description":
        this.setState({
          newDescription: value
        });
        break;
      case "tags":
        this.setState({
          newTags: value.split(",")
        });
        break;
      case "imageURL":
        this.setState({
          newImageURL: value
        });
        break;
      default:
        break;
    }
  };

  addNewItem = () => {
    const user = localStorage.getItem("user");
    const name = this.state.newName;

    // uid is comming from tommy's pull request
    let itemInfo = {
      name: name,
      user: user,
      image: this.state.newImageURL,
      description: this.state.newDescription,
      size: this.state.newSize,
      price: this.state.newPrice,
      tags: this.state.newTags,
      uid: this.generateId(name, user)
    };
    this.props.itemFn.createItems(itemInfo);
  };

  generateId = (name, user) => {
    let newName = name.replace(/\W/g, "");
    let newUser = user.replace(/\W/g, "");

    let date = Date.now();

    let id = date + newName + newUser;

    return id;
  };

  openAddItemWindow() {
    this.setState({
      addItemWindowVisibility: true
    });
  }
  closeAddItemWindow() {
    this.setState({
      addItemWindowVisibility: false
    });
  }

  render() {
    let componentToReturn;
    if (this.state.addItemWindowVisibility === true) {
      componentToReturn = (
        <div>
          <PantryBrowserPV
            openWindowFunction={this.openAddItemWindow.bind(this)}
          />
          <PantryBrowserM
            newName={this.state.newName}
            newPrice={this.state.newPrice}
            newImageURL={this.state.newImageURL}
            newSize={this.state.newSize}
            newDescription={this.state.newDescription}
            newTags={this.state.newTags}
            editItemDetails={this.editItemDetails}
            closeWindowFunction={this.closeAddItemWindow.bind(this)}
            addNewItem={this.addNewItem}
          />
        </div>
      );
    } else {
      componentToReturn = (
        <PantryBrowserPV
          openWindowFunction={this.openAddItemWindow.bind(this)}
        />
      );
    }

    return componentToReturn;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    itemFn: ItemA(dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PantryBrowserPC);
