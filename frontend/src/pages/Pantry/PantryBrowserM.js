import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "../../styles/ShoppinglistS.css";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const PantryBrowserM = props => {
  return (
    <div className="window-box">
      <div className="close-icon-container" onClick={props.closeWindowFunction}>
        <CloseIcon />
      </div>
      <div style={styles.editDialog}>
        <DialogTitle
          style={{ marginLeft: "-10px" }}
          id={props.itemName + "form-dialog"}
        >
          Add Item
        </DialogTitle>
        <TextField
          autoFocus
          name="name"
          label="Name"
          value={props.newName}
          onChange={props.editItemDetails}
          style={{ margin: "8px 0px" }}
          defaultValue={props.name}
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
          value={props.newPrice}
          onChange={props.editItemDetails}
          style={{ margin: "8px 0px" }}
          defaultValue={props.price}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
        />
        <TextField
          autoFocus
          name="imageURL"
          label="imageURL"
          value={props.newImageURL}
          onChange={props.editItemDetails}
          style={{ margin: "8px 0px" }}
          defaultValue={props.price}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
        />
        <TextField
          autoFocus
          name="size"
          label="Size"
          value={props.newSize}
          onChange={props.editItemDetails}
          style={{ margin: "8px 0px" }}
          defaultValue={props.size}
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
          value={props.newDescription}
          onChange={props.editItemDetails}
          style={{ margin: "8px 0px" }}
          defaultValue={props.description}
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
          value={props.newTags}
          onChange={props.editItemDetails}
          style={{ margin: "8px 0px" }}
          defaultValue={props.tagArr}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
        />
        <Button onClick={props.addNewItem} color="primary">
          Save Changes
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

export default PantryBrowserM;
