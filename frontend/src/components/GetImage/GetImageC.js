import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

/* View */
import SimpleDialogC from "./SimpleDialogC";
const uuidv4 = require("uuid/v4");

class GetImageC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "",
      upload_image: "", // For file upload pre-submission display
      upload_file: "", // For file upload form submission
      webcam_image: "",
      webcam_file: "",
      open: false
    };
  }

  styles = {
    Card: {
      margin: 10,
      width: 300,
      padding: 24,
      boxShadow: "0px 5px 20px rgba(0,0,0,0.3)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden"
    },
    img: {
      width: "100%"
    },
    closeBtn: {
      position: "absolute",
      right: 2,
      top: 2,
      color: "rgba(200,0,0,0.8)",
      backgroundColor: "#fff",
      borderRadius: "100px",
      border: "2px solid rgba(200,0,0,0.8)",
      cursor: "pointer"
    },
    modal: {
      padding: 10
    },
    icon: {
      color: "#555",
      marginLeft: "4px"
    },
    editDialog: {
      padding: 10,
      textAlign: "left",
      maxWidth: 500
    },
    textBox: {
      marginTop: "8px",
      marginBottom: "8px",
      overflow: "hidden",
      width: "99%"
    },
    subTitle: {
      margin: "2px 0px 8px 3px",
      fontSize: 14,
      display: "inline"
    },
    largeIcon: {
      width: 60,
      height: 60
    }
  };

  getFileName = ext => {
    /* Generate unique image file name */
    return uuidv4() + "." + ext;
  };

  /* Image selected by user */
  fileSelectedCB = event => {
    // Store in local state to use in form for submission
    this.setState({ upload_file: event.target.files[0] });

    // Create new filereader
    let reader = new FileReader();

    // Decode the file data
    reader.readAsDataURL(event.target.files[0]);

    // Add result attribute to event, and store it in state to display
    reader.onload = event => {
      this.setState({ upload_image: event.target.result });
    };
  };

  /* Set button pressed after upload image selection. */
  setUploadFileHandler = () => {
    // Change name to fit conventions
    let ext = this.state.upload_file.name.split(".").pop();
    let name = this.getFileName(ext);
    this.props.setImageName(name);
    const newFile = new File([this.state.upload_file], name, {
      type: this.state.upload_file.type
    });
    this.setState({ upload_file: newFile });

    // Setup form to be passed to AddItemC
    let form = new FormData();
    form.append("", newFile);
    this.props.setIconImage(this.state.upload_image);
    this.props.setImageForm(form);

    // Change modal to display the uploaded image
    // this.setState({ viewType: "display_upload" });
    this.handleClose();
  };

  // Set image
  webcamImageCB = img => {
    // Get the name
    let name = this.getFileName("png");
    this.props.setImageName(name);

    // Store in local state to display
    this.setState({ webcam_image: img });
    this.props.setIconImage(img);

    // Base64 String -> Blob -> File
    fetch(img)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], name);

        // Setup form to send back to AddItemC
        let form = new FormData();
        form.append("", file);
        this.props.setImageForm(form);

        // Change state to display the image
        this.setState({ viewType: "display_webcam" });
      });
  };

  viewTypeCancel = () => {
    this.setState({ viewType: "" });
  };

  viewTypeUpload = () => {
    this.setState({ viewType: "upload" });
  };

  viewTypeCamera = al => {
    this.setState({ viewType: "camera" });
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ viewType: "" });
  };

  render() {
    return (
      <div>
        <br />
        <IconButton
          onClick={this.handleClickOpen}
          color="primary"
          component="span"
          style={this.styles.largeIcon}
        >
          <PhotoCamera />
        </IconButton>
        {/* <Button onClick={this.handleClickOpen}>Get Image</Button> */}
        <SimpleDialogC
          fileSelectedCB={this.fileSelectedCB}
          webcamImageCB={this.webcamImageCB}
          setUploadFileHandler={this.setUploadFileHandler}
          viewTypeCancel={this.viewTypeCancel}
          viewTypeUpload={this.viewTypeUpload}
          viewTypeCamera={this.viewTypeCamera}
          viewType={this.state.viewType}
          upload_image={this.state.upload_image}
          webcam_image={this.state.webcam_image}
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default GetImageC;
