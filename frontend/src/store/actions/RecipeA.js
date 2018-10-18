import axios from "axios";

const RecipeA = dispatch => {
  return {
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
    },
    createRecipe: data => {
      axios.post(process.env.REACT_APP_RECIPES_URL, data).then(res => {
        axios.get(process.env.REACT_APP_RECIPES_URL).then(res => {
          dispatch({ type: "GET_RECIPES", data: res.data });
        });
      });
    },
    getImage: image_name => {
      let url = process.env.REACT_APP_DOWNLOAD_IMG + "/" + image_name;
      axios.get(url, { responseType: "blob" }).then(res => {
        // Create new filereader
        let reader = new FileReader();

        // Decode the file data, aka blob
        reader.readAsDataURL(new File([res.data], image_name));

        // Add result attribute to event, and store it in state to display
        reader.onload = event => {
          dispatch({
            type: "ADD_IMAGE",
            data: { name: image_name, data: event.target.result }
          });
        };
      });
    }
  };
};

export default RecipeA;
