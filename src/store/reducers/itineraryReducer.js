import {
  FETCH_ITINERARIES_REQUEST,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAILURE,
  PUT_ITINERARIES_COUNT_REQUEST,
  PUT_ITINERARIES_COUNT_SUCCESS,
  PUT_ITINERARIES_COUNT_FAILURE
} from "../actions/itineraryTypes";

const initialState = {
  loadingItineraries: true,
  itineraries: [],
  puttingToCount: false,
  puttingToCountSuccess: false,
  puttingToCountError: "",
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITINERARIES_REQUEST:
      return {
        ...state,
        loadingItineraries: true
      };
    case FETCH_ITINERARIES_SUCCESS:
      return {
        ...state,
        loadingItineraries: false,
        itineraries: action.payload,
        error: ""
      };
    case FETCH_ITINERARIES_FAILURE:
      return {
        ...state,
        loadingItineraries: false,
        itineraries: [],
        error: action.payload
      };
    case PUT_ITINERARIES_COUNT_REQUEST:
      return {
        ...state,
        puttingToCount: true,
        error: action.payload
      };
    case PUT_ITINERARIES_COUNT_SUCCESS:
      return {
        ...state,
        puttingToCount: false,
        puttingToCountSuccess: true,

        error: action.payload
      };
    case PUT_ITINERARIES_COUNT_FAILURE:
      return {
        ...state,
        puttingToCount: false,
        puttingToCountError: true,
        error: action.payload
      };

    default:
      return state;
  }
};
export default reducer;
