import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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

class RecipeCardV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // uid
      image: "",
      // image data
      image_data: null,
      userRecipeImages: []
    };
  }

  componentWillMount() {
    console.log(this.props.recipe);
    this.setState({ image: this.props.recipe.image });
    this.setState({ userRecipeImages: this.props.userRecipeImages });
  }

  getImage = img_name => {
    for (let i = 0; i < this.props.userRecipeImages.length; i++) {
      if (this.props.userRecipeImages[i].name === img_name) {
        this.setState({ image_data: this.props.userRecipeImages[i].data });
        break;
      } // end if
    } // end for
  }; // end getImage()

  render() {
    if (this.props.userRecipeImages.length && this.state.image_data === null) {
      this.getImage(this.state.image);
    }
    return (
      <Card style={styles.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.recipe.name}
            </Typography>

            <CardMedia
              style={styles.media}
              image={this.state.image_data}
              title={this.props.recipe.name}
            />

            <Typography component="p">
              {this.props.recipe.description}
            </Typography>
            {this.props.showIns && (
              <Typography component="p">
                {this.props.recipe.instructions}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

RecipeCardV.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    userRecipeImages: state.RecipeR.userRecipeImages
  };
};

export default connect(mapStateToProps)(RecipeCardV);
