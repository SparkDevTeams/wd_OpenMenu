import React from "react";

const initState = {
  userMenus: []
};

function MenuR(state = initState, action) {
  switch (action.type) {
    case "GET_MENUS":
      return { ...state, userMenus: action.data };
    case "ADD_MENU":
      return { ...state, userMenus: action.data };
    case "UPDATE_MENU":
      return { ...state, userMenus: action.data };
    case "DELETE_MENU":
      return { ...state, userMenus: action.data };
    case "SHARE_MENU":
      return { ...state, userMenus: action.data };
    default:
      return state;
  }
}

export default MenuR;
