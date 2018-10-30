const initState = {
  userMenus: [],
  userMenuImages: []
};

function MenuR(state = initState, action) {
  switch (action.type) {
    case "GET_MENUS":
      return { ...state, userMenus: action.data };
    case "CREATE_MENU":
      return { ...state, userMenus: action.data };
    case "UPDATE_MENU":
      return { ...state, userMenus: action.data };
    case "DELETE_MENU":
      return { ...state, userMenus: action.data };
    case "SHARE_MENU":
      return { ...state, userMenus: action.data };
    case "ADD_IMAGE":
      return {
        ...state,
        userMenuImages: state.userMenuImages.concat(action.data)
      };
    default:
      return state;
  }
}

export default MenuR;
