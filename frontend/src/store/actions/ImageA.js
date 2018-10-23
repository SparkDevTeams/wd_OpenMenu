import axios from "axios";

const ImageA = dispatch => {
  return {
    uploadImage: () => {
      axios
        .post(process.env.REACT_APP_RECIPES_URL)
        .then(res => {
          console.log("Upload successfully");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getImage: rurl => {
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
    // addItemToRecipe: data => {
    //   axios.put(process.env.REACT_APP_RECIPES_URL + "/${}");
    // }
  };
};

export default ImageA;
