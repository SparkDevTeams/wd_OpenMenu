import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// const screenWidth = window.screen.availWidth;

const styles = {
  card: {
    width: "50%",
    height: "100%"
  },
  largeCard: {
    height: "30%",
    width: "80%"
  },
  media: {
    height: "100%",
    width: "100%"
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
      <Card style={this.props.large ? styles.largeCard : styles.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.recipe.name}
            </Typography>

            <CardMedia title={this.props.recipe.name}>
              <img
                src={this.state.image_data}
                alt="not found"
                style={styles.media}
              />
            </CardMedia>

            <Typography component="p">
              {this.props.recipe.description}
            </Typography>
            {this.props.large && (
              <Typography component="p" paragraph={true}>
                {this.props.recipe.instructions}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    userRecipeImages: state.RecipeR.userRecipeImages
  };
};

export default connect(mapStateToProps)(RecipeCardV);
