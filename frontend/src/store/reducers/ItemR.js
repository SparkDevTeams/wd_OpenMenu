import React from "react";

const initState = {
  userItems: []
};

function ItemR(state = initState, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, userItems: action.data };
    default:
      return state;
  }
}

export default ItemR;
