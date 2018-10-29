import React from "react";
import Webcam from "react-webcam";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SwitchCamera from "@material-ui/icons/SwitchCamera";

const CamPicV = props => {
  if (props.image) {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <img alt="not available" src={props.image} />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={props.keepImage}>Keep</Button>
            <Button color="secondary" onClick={props.viewTypeCancel}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Webcam
              audio={false}
              height="100%"
              ref={props.setRef}
              screenshotFormat="image/jpeg"
              width="100%"
              videoConstraints={props.videoConstraints}
            />
          </Grid>

          <Grid item xs={12}>
            <Button onClick={props.toggleCamera}>
              <SwitchCamera />
            </Button>
            <Button onClick={props.capture}>Capture</Button>
            <Button color="secondary" onClick={props.viewTypeCancel}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default CamPicV;
