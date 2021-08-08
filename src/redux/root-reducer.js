import { combineReducers } from "redux";
import homeReducer from "./homepage/home.reducer";

export default combineReducers({
  homepage: homeReducer,
});
