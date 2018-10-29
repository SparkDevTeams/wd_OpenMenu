import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";

import blue from "@material-ui/core/colors/blue";

import GetImageV from "./GetImageV";

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    const { classes, handleClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <div onClick={this.props.handleClose}>
          <CloseIcon />
        </div>
        <DialogTitle id="simple-dialog-title">Set Image</DialogTitle>
        <div>
          <GetImageV
            fileSelectedCB={this.props.fileSelectedCB}
            webcamImageCB={this.props.webcamImageCB}
            setUploadFileHandler={this.props.setUploadFileHandler}
            viewTypeCancel={this.props.viewTypeCancel}
            viewTypeUpload={this.props.viewTypeUpload}
            viewTypeCamera={this.props.viewTypeCamera}
            viewType={this.props.viewType}
            upload_image={this.props.upload_image}
            webcam_image={this.props.webcam_image}
            handleClose={this.handleClose}
          />
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

export default withStyles(styles)(SimpleDialog);
