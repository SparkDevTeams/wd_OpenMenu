import React from "react";

const initState = {
  items: []
};

function ItemR(state = initState, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, items: action.data };
    default:
      return state;
  }
}

export default ItemR;
