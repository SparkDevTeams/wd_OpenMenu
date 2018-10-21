import axios from "axios";
import { downloadImage } from "../../utils/downloadImage";

const RecipeA = dispatch => {
  return {
    getRecipes: () => {
      axios
        .get(process.env.REACT_APP_RECIPES_URL)
        .then(res => {
          res.data.map(recipe => {
            downloadImage(recipe.image, dispatch);
          });
          dispatch({ type: "GET_RECIPES", data: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "GET_RECIPES_ERR" });
        });
    },
    createRecipe: data => {
      axios.post(process.env.REACT_APP_RECIPES_URL, data).then(res => {
        axios.get(process.env.REACT_APP_RECIPES_URL).then(res => {
          dispatch({ type: "GET_RECIPES", data: res.data });
        });
      });
    }
  };
};

export default RecipeA;
