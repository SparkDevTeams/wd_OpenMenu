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
      let umi = state.userMenuImages.map(img => {
        return img;
      });

      umi.push(action.data);

      return {
        ...state,
        userMenuImages: umi
      };
    // return { ...state, userMenuImages: [state.userMenuImages, action.data] };
    default:
      return state;
  }
}

export default MenuR;
