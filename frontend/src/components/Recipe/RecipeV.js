import React from "react";

import RecipeDetailV from "./RecipeDetailV";
import ItemCard from "./../../components/Item/ItemC";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  bttn: {
    position: "absolute",
    right: 0
  }
};

const RecipeV = props => {
  return (
    <div>
      {/* show detail of recipe */}

      <RecipeDetailV
        name={props.recipe.name}
        image={props.recipe.image}
        instructions={props.recipe.instructions}
      />
      <h1>Ingredients</h1>
      {/* Show list of ingredients */}
      {props.recipe.ingredients.length > 0
        ? props.recipe.ingredients.map(item => {
            return <ItemCard itemId={item.itemId} amount={item.amount} />;
          })
        : console.log("No ingredient. Add some")}
      {/* Add recipe */}
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
        <Dialog
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
        </Dialog>
      </div>
    </div>
  );
};

export default RecipeV;

{
  /* if you want to execute the function immediately 
      after it is defined, you have to wrap the whole declaration 
      in parenthesis (to convert it to an expression) and execute
       it by adding two more parentheses (passing any arguments 
       the function may take. */
}
{
  /* {(() => {
        return (
          <div>
            <ItemCardV />
            <ItemCardV />
            <ItemCardV />
          </div>
        );
      })()} */
}
