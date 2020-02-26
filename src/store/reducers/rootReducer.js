import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import filterCityReducer from "./filterCityReducer";
import sendFilteredCityReducer from "./sendFilteredCityReducer";
import itineraryReducer from "./itineraryReducer";
import cityNameReducer from "./cityNameReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  filter: filterCityReducer,
  filteredCities: sendFilteredCityReducer,
  itineraries: itineraryReducer,
  cityName: cityNameReducer,
  error: errorReducer,
  auth: authReducer
});

export default rootReducer;
