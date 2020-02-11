import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
const rootReducer = combineReducers({cities: citiesReducer});
console.log(rootReducer)
export default rootReducer;