import React from "react";
import MenuCard from "../../components/Menu/MenuCard";
import MenuBrowserM from "./MenuBrowserM";
import { Link } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  bttn: {
    position: "absolute",
    right: 0
  }
};

const MenuBrowserPV = props => {
  return (
    <div>
      {props.userMenus.map(menu => (
        <Link to={{ pathname: "/menus/" + menu.uid }}>
          <MenuCard menu={menu} />
        </Link>
      ))}

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
          <div onClick={props.handleCloseDialog}>
            <CloseIcon />
          </div>
          <MenuBrowserM
            openDialog={props.openDialog}
            handleOpenDialog={props.handleOpenDialog}
            handleCloseDialog={props.handleCloseDialog}
            handleOnChangeForm={props.handleOnChangeForm}
            handleRecipeForm={props.handleRecipeForm}
            addNewMenu={props.addNewMenu}
            userRecipes={props.userRecipes}
            addedRecipes={props.addedRecipes}
            handleAddRecipe={props.handleAddRecipe}
            currentRecipe={props.currentRecipe}
            menu_name={props.menu_name}
            image_name={props.image_name}
            sendImg={props.sendImg}
            setImageForm={props.setImageForm}
            setImageName={props.setImageName}
          />
        </Dialog>
      </div>
    </div>
  );
};

export default MenuBrowserPV;
