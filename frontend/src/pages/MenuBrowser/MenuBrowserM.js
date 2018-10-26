import React, { Component } from "react";

import "../../styles/ShoppinglistS.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import GetImageC from "../../components/GetImage/GetImageC";

export default class MenuBrowserM extends Component {
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

  render() {
    return (
      <div>
        <div style={this.styles.editDialog}>
          <DialogTitle style={{ marginLeft: "-10px" }}>Create Menu</DialogTitle>
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
            label="Image"
            value={this.props.newImageURL}
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
                    setImageForm={this.props.setImageForm}
                    setImageName={this.props.setImageName}
                    name={this.props.image_name}
                  />
                </InputAdornment>
              )
            }}
            fullWidth
          />
          <TextField
            select
            required
            name="currentRecipe"
            label="currentRecipe"
            value={this.props.currentRecipe}
            onChange={this.props.handleRecipeForm}
            style={{ margin: "8px 0px", width: "60%" }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          >
            {this.props.userRecipes.map(recipe => (
              <MenuItem value={recipe.uid}>{recipe.name}</MenuItem>
            ))}
          </TextField>

          <Button
            style={{ margin: "15px 0px" }}
            onClick={this.props.handleAddRecipe}
            color="primary"
          >
            Add Item
          </Button>

          {this.props.addedRecipes.length > 0
            ? this.props.addedRecipes.map(addedRecipe => {
                let filteredItem = this.props.userRecipes.filter(recipe => {
                  return recipe.uid === addedRecipe.uid;
                });
                let buttonDisplay = String(filteredItem[0].name);
                console.log(buttonDisplay);
                return (
                  <Button color="primary" fullWidth>
                    {/* JSON.stringify(ingredient) */}
                    {buttonDisplay}
                  </Button>
                );
              })
            : console.log("addRecipes array is empty")}

          <TextField
            autoFocus
            required
            name="description"
            label="description"
            value={this.props.newDescription}
            onChange={this.props.handleOnChangeForm}
            style={{ margin: "8px 0px" }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <Button onClick={this.props.addNewMenu} color="primary">
            Create Menu
          </Button>
          <Button onClick={this.props.handleCloseDialog} color="primary">
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}
