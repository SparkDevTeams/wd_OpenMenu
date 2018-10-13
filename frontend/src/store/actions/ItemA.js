import axios from "axios";

const ItemA = dispatch => {
  return {
    getItems: () => {
      axios.get(process.env.REACT_APP_ITEMS_URL).then(res => {
        dispatch({ type: "GET_ITEMS", data: res.data });
      });
    }
  };
};

export default ItemA;
