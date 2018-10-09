import { combineReducers } from "redux";
import AuthR from "./AuthR";
import RecipeR from "./RecipeR";
import MenuR from "./MenuR";

const RootR = combineReducers({
  AuthR,
  RecipeR,
  MenuR
});

export default RootR;
