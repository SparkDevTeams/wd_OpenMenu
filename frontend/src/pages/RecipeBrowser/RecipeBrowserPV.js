import React from "react";
import RecipeCardV from "./../../components/Recipe/RecipeCardV";

// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RecipeBrowserM from "./RecipeBrowserM";

const styles = {
  bttn: {
    position: "absolute",
    right: 0
  }
};

const RecipeBrowserPV = props => {
  return (
    <div>
      <h1>This is the Recipe page!</h1>
      <RecipeCardV />
      <div>
        <Button
          style={styles.bttn}
          margin-left="20px"
          variant="fab"
          color="secondary"
          aria-label="Add"
          onClick={props.handleOpenDialog}
        >
          <AddIcon />
        </Button>
        {/* <Dialog
          open={props.openDialog}
          onClose={props.handleCloseDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <form>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={props.handleCloseDialog} color="primary">
              Add Recipe
            </Button>
          </DialogActions>
        </Dialog> */}
        <RecipeBrowserM />
      </div>
    </div>
  );
};

export default RecipeBrowserPV;
