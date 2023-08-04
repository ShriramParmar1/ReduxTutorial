import changeTheNum from "./InDement";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  changTheNum: changeTheNum,
});
export default rootReducers;
