import React from "react";

const initState = {
  userItems: [],
  userItemImages: []
};

function ItemR(state = initState, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, userItems: action.data };
    case "ADD_IMAGE":
      return {
        ...state,
        userItemImages: state.userItemImages.concat(action.data)
      };
    default:
      return state;
  }
}

export default ItemR;
