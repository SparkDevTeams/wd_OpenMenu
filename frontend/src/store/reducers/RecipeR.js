const initState = {
  userRecipes: [],
  recipeImages: []
};

function RecipeR(state = initState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, userRecipes: action.data };
    case "ADD_IMAGE":
      return { ...state, recipeImages: state.recipeImages.concat(action.data) };
    default:
      return state;
  }
}

export default RecipeR;
