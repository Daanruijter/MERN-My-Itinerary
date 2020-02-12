import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import filterCityReducer from "./filterCityReducer";
import sendFilteredCityReducer from "./sendFilteredCityReducer";
const rootReducer = combineReducers({cities: citiesReducer, filter: filterCityReducer, filteredCities:sendFilteredCityReducer});
console.log(rootReducer)
export default rootReducer;