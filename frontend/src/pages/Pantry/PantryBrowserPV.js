import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import ItemCard from "../../components/Item/ItemC";
import "../../styles/ShoppinglistS.css";

const PantryBrowserPV = props => {
  return (
    <div>
      <h1>Items</h1>
      {console.log(props.userItems)}
      {props.userItems.length > 0
        ? props.userItems.map(item => {
            return <ItemCard itemId={item.uid} amount={item.amount} />;
          })
        : console.log("No user items")}
      <div onClick={props.openWindowFunction} className="fab-add-button">
        <Button variant="fab" color="secondary" aria-label="Add">
          <AddIcon />
        </Button>
      </div>
    </div>
  );
};

export default PantryBrowserPV;
