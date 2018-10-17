import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActions";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

const styles = {
  card: {
    width: 300
  },
  media: {
    height: 140
  }
};
const RecipeCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://www.mawbroonskitchen.com/wp-content/themes/dct-mawbroons-full/assets/img/titles/recipes-title.png"
          title="Recipe"
        />
        <img src="http://www.mawbroonskitchen.com/wp-content/themes/dct-mawbroons-full/assets/img/titles/recipes-title.png" />
        <CardContent>
          <Typography>Recipe</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>Tag</Button>
        <Button>Tag</Button>
        <Button>Tag</Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(RecipeCard);
