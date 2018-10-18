import React, { Component } from "react";

import "../../styles/ShoppinglistS.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import GetImageC from "../GetImage/GetImageC";

import axios from "axios";

export default class RecipeAddItemM extends Component {
  styles = {
    Card: {
      margin: 10,
      width: 300,
      padding: 24,
      boxShadow: "0px 5px 20px rgba(0,0,0,0.3)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden"
    },
    img: {
      width: "100%"
    },
    closeBtn: {
      position: "absolute",
      right: 2,
      top: 2,
      color: "rgba(200,0,0,0.8)",
      backgroundColor: "#fff",
      borderRadius: "100px",
      border: "2px solid rgba(200,0,0,0.8)",
      cursor: "pointer"
    },
    modal: {
      padding: 10
    },
    icon: {
      color: "#555",
      marginLeft: "4px"
    },
    editDialog: {
      padding: 10,
      textAlign: "left",
      maxWidth: 500
    },
    textBox: {
      marginTop: "8px",
      marginBottom: "8px",
      overflow: "hidden",
      width: "99%"
    },
    subTitle: {
      margin: "2px 0px 8px 3px",
      fontSize: 14,
      display: "inline"
    }
  };

  state = {
    image_form: "",
    image_name: ""
  };

  setImageForm = form => {
    this.setState({ image_form: form });
  };

  setImageName = name => {
    this.setState({ image_name: name });
  };

  sendImg = () => {
    // Close the form
    this.setState({ formOpen: false });

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
        <div style={this.styles.editDialog}>
          <DialogTitle style={{ marginLeft: "-10px" }}>Add Item</DialogTitle>
          <TextField
            autoFocus
            required
            name="name"
            label="Name"
            onChange={this.props.handleOnChangeForm}
            style={{ margin: "8px 0px" }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <TextField
            autoFocus
            required
            name="image"
            label="image"
            onChange={this.props.handleOnChangeForm}
            style={{ margin: "8px 0px" }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <GetImageC
                    setImageForm={this.setImageForm}
                    setImageName={this.setImageName}
                    name={this.props.recipe.name}
                  />
                  {/* <IconButton onClick={this.handleClickShowPassword} /> */}
                  {/* <IconButton>
                  <i className="material-icons">add_a_photo</i>
                </IconButton>
                <IconButton>
                  <i className="material-icons">add_photo_alternate</i>
                </IconButton> */}
                </InputAdornment>
              )
            }}
            fullWidth
          />
          <TextField
            select
            required
            name="ingredients"
            label="ingredients"
            value={this.props.currentIngredient}
            onChange={this.props.handleIngredientForm}
            style={{ margin: "8px 0px" }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          >
            {this.props.userItems.map(userItem => (
              <MenuItem value={userItem.uid}>{userItem.name}</MenuItem>
            ))}
          </TextField>

          <TextField
            autoFocus
            required
            name="amount"
            label="amount"
            onChange={this.props.handleIngredientForm}
            style={{ margin: "8px 30px" }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            style={{ margin: "15px 0px" }}
            onClick={this.props.handleAddItem}
            color="primary"
          >
            Add Item
          </Button>

          {this.props.ingredients.length > 0
            ? this.props.ingredients.map(ingredient => {
                let filteredItem = this.props.userItems.filter(userItem => {
                  return userItem.uid === ingredient.itemId;
                });
                let buttonDisplay =
                  String(filteredItem[0].name) +
                  "  " +
                  String(ingredient.amount);
                console.log(buttonDisplay);
                return (
                  <Button color="primary" fullWidth>
                    {/* JSON.stringify(ingredient) */}
                    {buttonDisplay}
                  </Button>
                );
              })
            : console.log("ingredients array is empty")}

          <TextField
            autoFocus
            required
            name="instruction"
            label="instruction"
            onChange={this.props.handleOnChangeForm}
            style={{ margin: "8px 0px" }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <Button onClick={this.props.addNewRecipe} color="primary">
            Save Changes
          </Button>
          <Button onClick={this.props.handleCloseDialog} color="primary">
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}
