import { combineReducers } from "redux";
import AuthR from "./AuthR";
import RecipeR from "./RecipeR";
import MenuR from "./MenuR";
import ItemR from "./ItemR";

const RootR = combineReducers({
  AuthR,
  RecipeR,
  MenuR,
  ItemR
});

export default RootR;
