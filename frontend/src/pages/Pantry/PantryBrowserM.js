import React, { Component } from "react";

import GetImageC from "../../components/GetImage/GetImageC";

import CloseIcon from "@material-ui/icons/Close";
// import "../../styles/ShoppinglistS.css";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

class PantryBrowserM extends Component {
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
        <div
          className="close-icon-container"
          onClick={this.props.closeWindowFunction}
        >
          <CloseIcon />
        </div>
        <div style={this.styles.editDialog}>
          <DialogTitle
            style={{ marginLeft: "-10px" }}
            id={this.props.itemName + "form-dialog"}
          >
            Add Item
          </DialogTitle>
          <TextField
            autoFocus
            name="name"
            label="Name"
            value={this.props.newName}
            onChange={this.props.editItemDetails}
            style={{ margin: "8px 0px" }}
            defaultValue={this.props.name}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <TextField
            autoFocus
            name="price"
            label="Price"
            value={this.props.newPrice}
            onChange={this.props.editItemDetails}
            style={{ margin: "8px 0px" }}
            defaultValue={this.props.price}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <TextField
            autoFocus
            name="image"
            label="image"
            value={this.props.image_name}
            style={{ margin: "8px 0px" }}
            // defaultValue={this.props.price}
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
            autoFocus
            name="size"
            label="Size"
            value={this.props.newSize}
            onChange={this.props.editItemDetails}
            style={{ margin: "8px 0px" }}
            defaultValue={this.props.size}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <TextField
            autoFocus
            name="description"
            label="Description"
            value={this.props.newDescription}
            onChange={this.props.editItemDetails}
            style={{ margin: "8px 0px" }}
            defaultValue={this.props.description}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <TextField
            autoFocus
            name="tags"
            label="Tags (must be separated by commas)"
            value={this.props.newTags}
            onChange={this.props.editItemDetails}
            style={{ margin: "8px 0px" }}
            defaultValue={this.props.tagArr}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
          <Button onClick={this.props.addNewItem} color="primary">
            Save Changes
          </Button>
        </div>
      </div>
    );
  }
}

export default PantryBrowserM;
