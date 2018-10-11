import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 1000
  },
  media: {
    height: 140
  }
};

function RecipeDetail(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <div>
          <CardMedia
            className={classes.media}
            image="https://static.olocdn.net/menu/applebees/ef0be810e965d2ef8ade562baf084952.jpg"
          />
        </div>
        <CardActionArea>
          <CardContent>
            <Typography component="h2">Salad</Typography>
            <Typography component="p">Instruction</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

RecipeDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeDetail);
