import {
    combineReducers
} from "redux";
import citiesReducer from "./citiesReducer";
import filterCityReducer from "./filterCityReducer";
import sendFilteredCityReducer from "./sendFilteredCityReducer";
import itineraryReducer from "./itineraryReducer";

const rootReducer = combineReducers({
    cities: citiesReducer,
    filter: filterCityReducer,
    filteredCities: sendFilteredCityReducer,
    itineraries: itineraryReducer
});
console.log(rootReducer)
export default rootReducer;