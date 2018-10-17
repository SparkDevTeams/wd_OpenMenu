import axios from "axios";

const MenuA = dispatch => {
  return {
    getMenus: () => {
      axios
        .get(process.env.REACT_APP_MENUS_URL)
        .then(res => {
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
