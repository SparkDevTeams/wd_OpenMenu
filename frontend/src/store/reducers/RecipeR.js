const initState = {
  userRecipes: [],
  userRecipeImages: []
};

function RecipeR(state = initState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, userRecipes: action.data };
    case "ADD_IMAGE":
      return {
        ...state,
        userRecipeImages: state.userRecipeImages.concat(action.data)
      };
    default:
      return state;
  }
}

export default RecipeR;
