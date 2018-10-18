import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// const screenWidth = window.screen.availWidth;

const styles = {
  card: {
    maxWidth: 1500
  },
  media: {
    height: 140
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.recipe.image}
          title={props.recipe.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Salad
          </Typography>
          <Typography component="p">{props.recipe.description}</Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to="/recipes/recipe">
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions> */}
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
