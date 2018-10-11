import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActions";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from '@material-ui/core/Icon';
import RecipeCard from "./RecipeCard";

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
    height: 250
  },
  recipeRow: {
    display: "flex",
    flexDirection: "row"
  },
  addRecipeButton: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  }
});

const MenuV = props => {
  const { classes } = props;
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.header}>Menu</h1>
      <div className={classes.menuDetails}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://pbs.twimg.com/profile_images/895676609167937538/-1o6Yg8f_400x400.jpg"
              title="Menu"
            />
            <CardContent>
              <Typography>Menu</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button>Share</Button>
          </CardActions>
        </Card>
        <div className={classes.menuInfo}>
          <h2>Menu Name</h2>
          <h2>Details</h2>
        </div>
        <div>
          <Button size="large">Edit</Button>
        </div>
      </div>
      <div className={classes.recipeRow}>
        <h2>Recipes: </h2>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
      <Tooltip title="Add recipe">
        <Button
          variant="fab"
          color="secondary"
          className={classes.addRecipeButton}
        >
          <Icon>add_circle</Icon>
        </Button>
      </Tooltip>
    </div>
  );
};

export default withStyles(styles)(MenuV);
