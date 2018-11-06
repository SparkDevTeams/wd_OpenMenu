import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/ShoppinglistS.css";
import ItemCard from "../../components/Item/ItemC";

function ShoppinglistPV(props) {
  return (
    <div>
      <div class="added-items-grid-container">
        <div class="added-items-grid">
          {props.addedItems.map(item => (
            <div>
              <ItemCard
                key={item.uid}
                itemId={item.uid}
                amount={item.amount}
                className="item-card"
              />
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
