import axios from "axios";
import { downloadImage } from "../../utils/downloadImage";

/**
 * Description:
 * Item Action for beckend interaction and image uploading/downloading.
 *
 * @param dispatch Recieved from redux. Dispatched actions to central store
 *
 * Output: Modifies central store
 *  - userItems: Gets list of Menu objects
 *  - itemImages: Downloads and store menu related images
 *
 * Components used: None
 *
 * Local State: None
 *
 * Central store:
 *
 * Todo:
 *  - Get Items for specific user only
 */
const ItemA = dispatch => {
  return {
    getItems: () => {
      axios.get(process.env.REACT_APP_ITEMS_URL).then(res => {
        res.data.map(item => {
          downloadImage(item.image, dispatch);
          return 0;
        });
        dispatch({ type: "GET_ITEMS", data: res.data });
      });
    },
    createItems: data => {
      axios.post(process.env.REACT_APP_ITEMS_URL, data).then(res => {
        axios.get(process.env.REACT_APP_ITEMS_URL).then(res => {
          dispatch({ type: "GET_ITEMS", data: res.data });
        });
      });
    },
    deleteItems: data => {
      axios.delete(process.env.REACT_APP_ITEMS_URL + "/" + data).then(res => {
        axios.get(process.env.REACT_APP_ITEMS_URL).then(res => {
          dispatch({ type: "GET_ITEMS", data: res.data });
        });
      });
    }
  };
};

export default ItemA;
