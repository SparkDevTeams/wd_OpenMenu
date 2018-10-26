import React, { Component } from "react";
import { connect } from "react-redux";
import PantryBrowserPV from "./PantryBrowserPV";

import ItemA from "../../store/actions/ItemA";
import axios from "axios";
import { generateId } from "../../utils/generateId";

class PantryBrowserPC extends Component {
  constructor() {
    super();
    this.state = {
      addModalWindowState: false,
      newName: "",
      newDescription: "",
      newSize: "",
      newTags: "",
      newPrice: "",
      image_form: "",
      image_name: ""
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
      image: this.state.image_name,
      description: this.state.newDescription,
      size: this.state.newSize,
      price: this.state.newPrice,
      tags: this.state.newTags,
      uid: generateId(name, user)
    };
    this.closeAddItemWindow();
    this.props.itemFn.createItems(itemInfo);
    this.sendImg();
  };

  openAddItemWindow = () => {
    this.setState({
      addModalWindowState: true
    });
  };

  closeAddItemWindow = () => {
    this.setState({
      addModalWindowState: false
    });
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
      <div>
        <PantryBrowserPV
          addModalWindowState={this.state.addModalWindowState}
          openAddItemWindow={this.openAddItemWindow}
          userItems={this.props.userItems}
          userItemImages={this.props.userItemImages}
          newName={this.state.newName}
          newPrice={this.state.newPrice}
          newImageURL={this.state.newImageURL}
          newSize={this.state.newSize}
          newDescription={this.state.newDescription}
          newTags={this.state.newTags}
          editItemDetails={this.editItemDetails}
          closeAddItemWindow={this.closeAddItemWindow}
          addNewItem={this.addNewItem}
          image_name={this.state.image_name}
          sendImg={this.sendImg}
          setImageForm={this.setImageForm}
          setImageName={this.setImageName}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userItems: state.ItemR.userItems,
    userItemImages: state.ItemR.userItemImages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    itemFn: ItemA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PantryBrowserPC);
