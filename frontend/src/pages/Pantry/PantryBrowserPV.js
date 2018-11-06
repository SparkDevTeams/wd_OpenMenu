import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";

import PantryBrowserM from "./PantryBrowserM";
import ItemCard from "../../components/Item/ItemC";
import Grid from "@material-ui/core/Grid";

const PantryBrowserPV = props => {
  return (
    <div>
      {/* <div onClick={props.openWindowFunction} className="fab-add-button"> */}
      <div onClick={props.openAddItemWindow}>
        <Button
          id="add-btn"
          variant="fab"
          color="secondary"
          aria-label="Add"
          onClick={props.openAddItemWindow}
        >
          <AddIcon />
        </Button>
      </div>

      <h1>Items</h1>
      <Grid container id="itemContainer" spacing={40}>
        {props.userItems.length > 0
          ? props.userItems.map(item => {
              return (
                <Grid key={item.uid} xs={12} item md={4} xl={4}>
                  <ItemCard
                    key={item.uid}
                    itemId={item.uid}
                    amount={item.amount}
                  />
                </Grid>
              );
            })
          : console.log("")}
      </Grid>

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
