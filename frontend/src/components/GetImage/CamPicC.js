import React, { Component } from "react";
import CamPicV from "./CamPicV";

export default class CamPicC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null
    };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ image: (new Image().src = imageSrc) });
  };

  clear = () => {
    this.setState({ pic: null });
  };

  keepImage = () => {
    this.props.webcamImageCB(this.state.image);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <CamPicV
          setRef={this.setRef}
          videoConstraints={videoConstraints}
          capture={this.capture}
          keepImage={this.keepImage}
          image={this.state.image}
        />
      </div>
    );
  }
}
