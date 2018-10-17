const initState = {
  userRecipes: []
};

function RecipeR(state = initState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, userRecipes: action.data };
    default:
      return state;
  }
}

export default RecipeR;
