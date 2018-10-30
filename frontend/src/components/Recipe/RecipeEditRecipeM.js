import React, { Component } from "react";

import "../../styles/ShoppinglistS.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
// import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import GetImageC from "./../GetImage/GetImageC";

class RecipeEditRecipeM extends Component {
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
    },
    avatar: {
      width: 60,
      height: 60
    }
  };
  state = {
    image_form: "",
    image_name: ""
  };
  render() {
    return (
      <div>
        <div style={this.styles.editDialog}>
          <DialogTitle style={{ marginLeft: "-10px" }}>Edit Recipe</DialogTitle>
          <TextField
            autoFocus
            required
            name="name"
            label="Name"
            value={this.props.newName}
            defaultValue={this.props.recipe.name}
            onChange={this.props.handleOnChangeForm}
            style={{ margin: "8px 0px" }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <GetImageC
            setImageForm={this.props.setImageForm}
            setImageName={this.props.setImageName}
            name={this.props.image_name}
          />
          <Avatar
            alt="Upload Image!"
            src={this.state.image_form}
            // src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
            style={this.styles.avatar}
          />
          {/* <TextField
            autoFocus
            required
            name="image"
            label="image"
            value={props.newImageURL}
            onChange={props.handleOnChangeForm}
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
                    setImageForm={props.setImageForm}
                    setImageName={props.setImageName}
                    name={props.image_name}
                  />
                 
                </InputAdornment>
              )
            }}
            fullWidth
          /> */}
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
            value={this.props.currentIngredientAmount}
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
                for (let i = 0; i < this.props.userItems.length; ++i) {
                  if (this.props.userItems[i].uid === ingredient.itemId) {
                    let buttonDisplay =
                      String(this.props.userItems[i].name) +
                      "  " +
                      String(ingredient.amount);
                    console.log(buttonDisplay);
                    return (
                      <Button color="primary" fullWidth>
                        {buttonDisplay}
                        <IconButton>
                          <i className="material-icons">clear</i>
                        </IconButton>
                      </Button>
                    );
                  }
                }
              })
            : console.log("no ingredients")}

          <TextField
            autoFocus
            required
            name="instruction"
            label="instruction"
            value={this.props.newDescription}
            defaultValue={this.props.recipe.instructions}
            onChange={this.props.handleOnChangeForm}
            style={{ margin: "8px 0px" }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <Button onClick={this.props.updateRecipe} color="primary">
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

export default RecipeEditRecipeM;
