const initState = {
  userRecipes: []
};

function RecipeR(state = initState, action) {
  switch (action.type) {
    case "LOAD_ITEMS":
      return { ...state, items: action.data };
    case "GET_RECIPES":
      return { ...state, userRecipes: action.data };
    default:
      return state;
  }
}

export default RecipeR;
