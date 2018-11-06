import React, { Component } from "react";
import CamPicV from "./CamPicV";

export default class CamPicC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      camera: "user"
    };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ image: (new Image().src = imageSrc) });
  };

  toggleCamera = () => {
    if (this.state.camera === "front") {
      this.setState({ camera: "environment" });
    } else {
      this.setState({ camera: "front" });
    }
  };

  clear = () => {
    this.setState({ pic: null });
  };

  keepImage = () => {
    this.props.webcamImageCB(this.state.image);
    this.props.viewTypeCancel();
    this.props.handleClose();
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: this.state.camera
    };

    return (
      <div>
        <CamPicV
          setRef={this.setRef}
          videoConstraints={videoConstraints}
          capture={this.capture}
          keepImage={this.keepImage}
          image={this.state.image}
          toggleCamera={this.toggleCamera}
          viewTypeCancel={this.props.viewTypeCancel}
        />
      </div>
    );
  }
}
