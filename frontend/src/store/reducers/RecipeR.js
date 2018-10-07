const initState = {
  items: [],
  recipes: []
};

function RecipeR(state = initState, action) {
  switch (action.type) {
    case "LOAD_ITEMS":
      return { ...state, items: action.data };
    case "LOAD_RECIPES":
      return { ...state, recipes: action.data };
    default:
      return state;
  }
}

export default RecipeR;
