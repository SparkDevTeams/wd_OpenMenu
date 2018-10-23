import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

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

class MenuCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      image_data: null,
      userMenuImages: []
    };
  }

  componentWillMount() {
    this.setState({ image: this.props.menu.image });
    this.setState({ userMenuImages: this.props.userMenuImages });
  }

  getImage = img_name => {
    for (let i = 0; i < this.props.userMenuImages.length; i++) {
      if (this.props.userMenuImages[i].name === img_name) {
        this.setState({ image_data: this.props.userMenuImages[i].data });
        break;
      } // end if
    } // end for
  }; // end getImage()

  render() {
    if (this.props.userMenuImages.length && this.state.image_data === null) {
      this.getImage(this.state.image);
    }
    return (
      <Fragment>
        <Card style={styles.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.menu.name}
              </Typography>

              <CardMedia
                style={styles.media}
                image={this.state.image_data}
                title={this.props.menu.name}
              />

              <Typography component="p">
                {this.props.menu.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button>Tag</Button>
            <Button>Tag</Button>
            <Button>Tag</Button> */}
          </CardActions>
        </Card>
      </Fragment>
    );
  } // end render()
} // end component

const mapStateToProps = state => {
  return {
    userMenuImages: state.MenuR.userMenuImages
  };
};

export default connect(mapStateToProps)(MenuCard);
