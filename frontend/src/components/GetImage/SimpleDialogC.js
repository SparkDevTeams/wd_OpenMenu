import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// import Avatar from "@material-ui/core/Avatar";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
// import PersonIcon from "@material-ui/icons/Person";
// import AddIcon from "@material-ui/icons/Add";

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
    this.props.onClose();
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
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
