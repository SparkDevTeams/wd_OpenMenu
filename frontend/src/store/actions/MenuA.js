import axios from "axios";
import { downloadImage } from "../../utils/downloadImage";

/**
 * Description:
 * Menu Action for beckend interaction and image uploading/downloading.
 *
 * @param dispatch Recieved from redux. Dispatched actions to central store
 *
 * Output: Modifies central store
 *  - userItems: Gets list of Menu objects
 *  - menuImages: Downloads and store menu related images
 *
 * Components used: None
 *
 * Local State: None
 *
 * Central store:
 *
 * Todo:
 *  - Get Menus for specific user only
 */
const MenuA = dispatch => {
  return {
    getMenus: () => {
      axios
        .get(process.env.REACT_APP_MENUS_URL)
        .then(res => {
          res.data.map(menu => {
            downloadImage(menu.image, dispatch);
          });
          dispatch({ type: "GET_MENUS", data: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "GET_MENUS_ERR" });
        });
    },
    createMenu: data => {
      axios.post(process.env.REACT_APP_MENUS_URL, data).then(res => {
        axios.get(process.env.REACT_APP_MENUS_URL).then(res => {
          dispatch({ type: "CREATE_MENU", data: res.data });
        });
      });
    },
    updateMenu: () => {
      axios
        .get(/* REACT_APP_ITEM_URL */)
        .then(res => {
          dispatch({ type: "UPDATE_MENU", data: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "UPDATE_MENU_ERR" });
        });
    },
    deleteMenu: () => {
      axios
        .get(/* REACT_APP_ITEM_URL */)
        .then(res => {
          dispatch({ type: "DELETE_MENU", data: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "DELETE_MENU_ERR" });
        });
    },
    shareMenu: () => {
      axios
        .get(/* REACT_APP_ITEM_URL */)
        .then(res => {
          dispatch({ type: "SHARE_MENU", data: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "SHARE_MENU_ERR" });
        });
    }
  };
};

export default MenuA;
