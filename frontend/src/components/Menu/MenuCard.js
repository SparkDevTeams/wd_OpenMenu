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
  state = {
    image: "",
    userMenuImages: []
  };

  componentWillMount() {
    this.setState({ image: this.props.menu.image });
    this.setState({ userMenuImages: this.props.userMenuImages });
  }

  componentDidMount() {
    this.getImage(this.state.image);
  }

  getImage = img_name => {
    for (let i = 0; i < this.state.userMenuImages; i++) {
      if (this.userMenuImages[i].name == img_name) {
        this.setState({ image: this.userMenuImages[i].data });
      }
    }
  }; // end getImage()

  render() {
    return (
      <Fragment>
        <Card style={styles.card}>
          <CardActionArea>
            <CardMedia
              style={styles.media}
              image={this.state.image}
              title={this.props.menu.name}
            />
            {/* <img src={this.state.image} /> */}
            <CardContent>
              <Typography>{this.props.menu.description}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button>Tag</Button>
            <Button>Tag</Button>
            <Button>Tag</Button>
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
