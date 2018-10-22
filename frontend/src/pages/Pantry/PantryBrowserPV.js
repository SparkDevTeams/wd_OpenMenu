import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";

import PantryBrowserM from "./PantryBrowserM";
import ItemCard from "../../components/Item/ItemC";
// import "../../styles/ShoppinglistS.css";

const PantryBrowserPV = props => {
  return (
    <div>
      {/* <div onClick={props.openWindowFunction} className="fab-add-button"> */}
      <div onClick={props.openAddItemWindow}>
        <Button
          variant="fab"
          color="secondary"
          aria-label="Add"
          onClick={props.openAddItemWindow}
        >
          <AddIcon />
        </Button>
      </div>

      <h1>Items</h1>
      {/* {console.log(props.userItems)} */}
      {props.userItems.length > 0
        ? props.userItems.map(item => {
            return <ItemCard itemId={item.uid} amount={item.amount} />;
          })
        : console.log("")}

      <Dialog
        open={props.addModalWindowState}
        onClose={props.closeAddItemWindow}
        aria-labelledby="form-dialog-title"
      >
        <div onClick={props.closeAddItemWindow}>
          <CloseIcon />
        </div>
        <PantryBrowserM
          newName={props.newName}
          newPrice={props.newPrice}
          newImageURL={props.newImageURL}
          newSize={props.newSize}
          newDescription={props.newDescription}
          newTags={props.newTags}
          editItemDetails={props.editItemDetails}
          closeAddItemWindow={props.closeAddItemWindow}
          addNewItem={props.addNewItem}
          image_name={props.image_name}
          sendImg={props.sendImg}
          setImageForm={props.setImageForm}
          setImageName={props.setImageName}
        />
      </Dialog>
    </div>
  );
};

export default PantryBrowserPV;
