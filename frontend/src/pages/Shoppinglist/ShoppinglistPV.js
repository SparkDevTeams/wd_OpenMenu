import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/ShoppinglistS.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function ShoppinglistPV(props) {
  const { classes } = props;
  return (
    <div>
      <div onClick={props.openWindowFunction} className="fab-add-button">
        <Button variant="fab" color="secondary" aria-label="Add">
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}

export default ShoppinglistPV;
