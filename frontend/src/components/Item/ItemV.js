import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

const styles = {
  Card: {
    cursor: "pointer",
    position: "relative",
  },
  img:{
    width: '60%',
    margin: 'auto',
    paddingTop: '10px'
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
    maxWidth: 400
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

const ItemV = props => {
  return (
    <Fragment>
      {/*card to display*/}
      <Card style={styles.Card} onClick={props.detailsToggle}>
          <img className="thumbnail-img" src={props.img} alt="not found" />
        <Typography variant="headline" component="h2">
          {props.name}
        </Typography>
        <Divider style={{ marginTop: 5, marginBottom: 2 }} />
        <div style={{ margin: "3px 0 8px 0" }}>
          <EditIcon style={styles.icon} onClick={props.editToggle} />
          <ShareIcon style={styles.icon} onClick={props.shareItem} />
          <DeleteIcon style={styles.icon} onClick={props.deleteToggle} />
        </div>
        <div>{props.tags()}</div>
      </Card>

      {/*info dialog */}
      <Dialog open={props.detailsOpen} onClose={props.detailsToggle}>
        <CloseIcon style={styles.closeBtn} onClick={props.detailsToggle} />
        <img src={props.img} alt="not found" style={styles.img} />
        <DialogTitle style={{ paddingBottom: 5 }} id="form-dialog-title">
          {props.name}
        </DialogTitle>
        <DialogContent style={{ marginTop: -3 }}>
          <p style={styles.subTitle}>
            <strong>Price: </strong>
            {props.price}
          </p>
          <p style={styles.subTitle}>
            <strong>Size: </strong>
            {props.size}
          </p>
          <DialogContentText style={{ marginTop: 10 }}>
            {props.description}
          </DialogContentText>
        </DialogContent>
        <Divider style={{ marginTop: -5 }} />
        <div style={{ padding: 20 }}>{props.tags()}</div>
      </Dialog>

      {/* edit dialog */}
      <Dialog open={props.editOpen}>
        <div style={styles.editDialog}>
          <DialogTitle
            style={{ marginLeft: "-10px" }}
            id={props.itemName + "form-dialog"}
          >
            Edit Item
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
          <Button onClick={props.editItem} color="primary">
            Save Changes
          </Button>
          <Button onClick={props.editToggle} color="primary">
            Cancel
          </Button>
        </div>
      </Dialog>

      {/*delete dialog */}
      <Dialog open={props.deleteOpen} onClose={props.deleteToggle}>
        <DialogContent style={{ marginTop: -3 }}>
          <DialogTitle style={{ paddingBottom: 8 }}>
            {`Are you sure you want to delete ${props.name} ?`}
          </DialogTitle>
          <Button onClick={props.deleteItem} color="primary">
            Delete Item
          </Button>
          <Button onClick={props.deleteToggle} color="primary">
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
export default ItemV;
