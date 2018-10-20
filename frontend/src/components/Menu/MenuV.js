import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import MenuCard from "./MenuCard";
import RecipeCardV from "../Recipe/RecipeCardV";

const styles = theme => ({
  mainContainer: {
    //height: 800
  },
  header: {
    textAlign: "center"
  },
  card: {
    width: 500,
    marginRight: 60
  },
  menuDetails: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 100
  },
  menuInfo: {
    marginRight: 70
  },
  media: {
    height: 200
  },
  recipeRow: {
    display: "flex",
    flexDirection: "row"
  },
  addRecipeButton: {
    position: "absolute",
    right: 0
    //bottom: theme.spacing.unit * 2,
    //right: theme.spacing.unit * 3
  }
});

const MenuV = props => {
  //const { classes } = props;
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.header}>{props.name}</h1>
      <div style={styles.menuDetails} /*className={classes.menuDetails}*/>
        <Card style={styles.card}>
          <MenuCard menu={this.props.menu} />
          <CardActions>
            <Button>Share</Button>
          </CardActions>
        </Card>
        <div style={styles.menuInfo} /*className={classes.menuInfo}*/>
          <h2>Menu Name</h2>
          <h2>Details</h2>
        </div>
        <div>
          <Button size="large">Edit</Button>
        </div>
      </div>
      <div style={styles.recipeRow} /*className={classes.recipeRow}*/>
        <h2>Recipes: </h2>
        {/* <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard /> */}
      </div>
      <div>
        <Tooltip title="Add recipe">
          <Button
            variant="fab"
            color="secondary"
            style={styles.addRecipeButton}
            /*className={classes.addRecipeButton}*/
            onClick={props.handleOpen}
            scroll="paper"
            aria-labelledby="addrecipes"
          >
            <AddIcon />
          </Button>
        </Tooltip>
        <Dialog open={props.openDialog} onClose={props.handleClose}>
          <DialogTitle id="addrecipes">Add Recipes</DialogTitle>
          <DialogContent>
            {/* <RecipeCard />
            <RecipeCard />
            <RecipeCard /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} color="primary">
              Add Recipe(s)
            </Button>
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default MenuV;
