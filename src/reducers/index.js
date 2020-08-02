import { combineReducers } from "redux";
import dataFetch from "./dataFetch";
import loginStatus from "./loginStatus";

const reducer = combineReducers({
  dataFetch,
  loginStatus,
});

export default reducer;
