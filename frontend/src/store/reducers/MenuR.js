const initState = {
  menus: []
};

function MenuR(state = initState, action) {
  switch (action.type) {
    case "GET_MENUS":
      return { ...state, menus: action.data };
    case "ADD_MENU":
      return { ...state, menus: action.data };
    case "UPDATE_MENU":
      return { ...state, menus: action.data };
    case "DELETE_MENU":
      return { ...state, menus: action.data };
    case "SHARE_MENU":
      return { ...state, menus: action.data };
    default:
      return state;
  }
}

export default MenuR;
