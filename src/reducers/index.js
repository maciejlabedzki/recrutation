import { combineReducers } from "redux";
import dataFetch from "./dataFetch";
import loginStatus from "./loginStatus";
import pageNavigation from "./pageNavigation";

const reducer = combineReducers({
  dataFetch,
  loginStatus,
  pageNavigation,
});

export default reducer;
