import axios from "axios";

const RecipeA = dispatch => {
  return {
    loadItems: () => {
      axios
        .get(/* REACT_APP_ITEM_URL */)
        .then(res => {
          dispatch({ type: "LOAD_ITEMS", data: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "LOAD_ITEMS_ERR" });
        });
    },
    getRecipes: () => {
      axios
        .get(process.env.REACT_APP_RECIPES_URL)
        .then(res => {
          dispatch({ type: "GET_RECIPES", data: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "GET_RECIPES_ERR" });
        });
    }
  };
};

export default RecipeA;
