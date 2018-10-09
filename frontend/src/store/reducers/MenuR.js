import React from "react";

const initState = {
  menus: []
};

function MenuR(state = initState, action) {
  switch (action.type) {
    case "getMenus":
      return { ...state, menus: action.data };
    default:
      return state;
  }
}

export default MenuR;
