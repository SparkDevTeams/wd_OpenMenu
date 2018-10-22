import React from "react";

import "../../styles/ShoppinglistS.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";

const RecipeEditRecipeM = props => {
  return (
    <div>
      <div style={styles.editDialog}>
        <DialogTitle style={{ marginLeft: "-10px" }}>Edit Recipe</DialogTitle>
        <TextField
          autoFocus
          required
          name="name"
          label="Name"
          value={props.newName}
          defaultValue={props.recipe.name}
          onChange={props.handleOnChangeForm}
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
                {/* <IconButton onClick={this.handleClickShowPassword} /> */}
                <IconButton>
                  <i className="material-icons">add_a_photo</i>
                </IconButton>
                <IconButton>
                  <i className="material-icons">add_photo_alternate</i>
                </IconButton>
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
          value={props.currentIngredient}
          onChange={props.handleIngredientForm}
          style={{ margin: "8px 0px" }}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        >
          {props.userItems.map(userItem => (
            <MenuItem value={userItem.uid}>{userItem.name}</MenuItem>
          ))}
        </TextField>

        <TextField
          autoFocus
          required
          name="amount"
          label="amount"
          value={props.newDescription}
          onChange={props.handleIngredientForm}
          style={{ margin: "8px 30px" }}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          style={{ margin: "15px 0px" }}
          onClick={props.handleAddItem}
          color="primary"
        >
          Add Item
        </Button>

        {props.recipe.ingredients.length > 0
          ? props.recipe.ingredients.map(ingredient => {
              for (let i = 0; i < props.userItems.length; ++i) {
                if (props.userItems[i].uid === ingredient.itemId) {
                  let buttonDisplay =
                    String(props.userItems[i].name) +
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
          value={props.newDescription}
          defaultValue={props.recipe.instructions}
          onChange={props.handleOnChangeForm}
          style={{ margin: "8px 0px" }}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
        />
        <Button onClick={props.addNewRecipe} color="primary">
          Save Changes
        </Button>
        <Button onClick={props.handleCloseDialog} color="primary">
          Cancel
        </Button>
      </div>
    </div>
  );
};

const styles = {
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

export default RecipeEditRecipeM;
