import React, { Component } from "react";

import GetImageC from "../../components/GetImage/GetImageC";

import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

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
    iconImage: null
  };

  setIconImage = img => {
    this.setState({ iconImage: img });
  };

  render() {
    return (
      <div>
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

          <GetImageC
            setImageForm={this.props.setImageForm}
            setImageName={this.props.setImageName}
            name={this.props.image_name}
            setIconImage={this.setIconImage}
          />
          {this.state.iconImage != null ? (
            <Card className={this.styles.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="user image"
                  className={this.styles.media}
                  height="20%"
                  image={this.state.iconImage}
                />
              </CardActionArea>
            </Card>
          ) : (
            console.log("")
          )}

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
            Create Item
          </Button>
          <Button onClick={this.props.closeAddItemWindow} color="primary">
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

export default PantryBrowserM;
