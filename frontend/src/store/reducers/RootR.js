import { combineReducers } from "redux";
import AuthR from "./AuthR";
import RecipeR from "./RecipeR";

const RootR = combineReducers({
  AuthR,
  RecipeR
});

export default RootR;
