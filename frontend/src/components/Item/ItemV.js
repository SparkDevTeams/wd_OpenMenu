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
  }
};

const ItemV = props => {
  return (
    <Fragment>
      {/*card to display*/}
      <Card style={styles.Card} onClick={props.detailsToggle}>
        <img src={props.img} style={styles.img} />
        <Typography variant="headline" component="h2">
          {props.name}
        </Typography>
        <Divider style={{ marginTop: 5, marginBottom: 2 }} />
        <div style={{ margin: "3px 0 8px 0" }}>
          <EditIcon style={styles.icon} onClick={props.editToggle} />
          <ShareIcon style={styles.icon} onClick={props.shareItem} />
          <DeleteIcon style={styles.icon} onClick={props.deleteItem} />
        </div>
        <div>{props.tags()}</div>
      </Card>

      {/*info dialog */}
      <Dialog open={props.detailsOpen} onClose={props.detailsToggle}>
        <CloseIcon style={styles.closeBtn} onClick={props.detailsToggle} />
        <img src={props.img} style={styles.img} />
        <DialogTitle id="form-dialog-title">{props.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.description}</DialogContentText>
        </DialogContent>
        <Divider style={{ marginTop: -5 }} />
        <div style={{ padding: 20 }}>{props.tags()}</div>
      </Dialog>

      {/* edit dialog */}
      <Dialog open={!props.editOpen}>
        <div style={styles.editDialog}>
          <DialogTitle
            style={{ marginLeft: "-10px" }}
            id={props.itemName + "form-dialog"}
          >
            Edit Item
          </DialogTitle>
          <TextField
            autoFocus
            id={props.name + "edit-name"}
            margin="dense"
            placeholder="New name"
            defaultValue={props.name}
            type="name"
            value={props.newName}
            onChange={props.addName}
            fullWidth
          />
          <TextField
            autoFocus
            id={props.name + "edit-description"}
            style={styles.textBox}
            placeholder="New Description"
            defaultValue={props.description}
            type="description"
            value={props.newDescription}
            onChange={props.addDescription}
            multiline
            margin="normal"
            variant="outlined"
          />
          <Button onClick={props.editItem} color="primary">
            Save Changes
          </Button>
          <Button onClick={props.editToggle} color="primary">
            Cancel
          </Button>
        </div>
      </Dialog>
    </Fragment>
  );
};
export default ItemV;
