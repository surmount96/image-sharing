import { combineReducers } from "redux";
import imageFetch from "./imageFetch";
import loadingReducer from "./loadingReducer";

export default combineReducers({imageFetch,loadingReducer});