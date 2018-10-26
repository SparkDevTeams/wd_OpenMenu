import axios from "axios";

/**
 * Used by Actions to download and store images to central store once
 * menu/recipe/item object lists are downloaded from DB.
 *
 * Expects coresponding Reducer to have a case for "ADD_IMAGE"
 *
 * @param {string} image_name name of the image to download
 * @param {method()} dispatch Recieved from redux
 */
export const downloadImage = (image_name, dispatch) => {
  let url = process.env.REACT_APP_DOWNLOAD_IMG + "/" + image_name;
  axios.get(url, { responseType: "blob" }).then(res => {
    // Create new filereader
    let reader = new FileReader();

    // Decode the file data, aka blob
    reader.readAsDataURL(new File([res.data], image_name));

    // Add result attribute to event, and store it in state to display
    reader.onload = event => {
      dispatch({
        type: "ADD_IMAGE",
        data: { name: image_name, data: event.target.result }
      });
    };
  });
};
