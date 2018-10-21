import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/ShoppinglistS.css";
import RecipeCard from "../../components/Recipe/ItemCardV";
import CardC from "./CardC";

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
      <div class="added-items-grid-container">
        <div class="added-items-grid">
          {props.addedItems.map(item =>(
            <div>
              <RecipeCard name={item.state.item.props.name} className="item-card" />
            </div>
          ))}
        </div>
      </div>
      <div onClick={props.openWindowFunction} className="fab-add-button">
        <Button variant="fab" color="secondary" aria-label="Add">
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}

export default ShoppinglistPV;
