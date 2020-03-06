import {
  FETCH_ITINERARIES_REQUEST,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAILURE
} from "./itineraryTypes";

//fetch data//
export const fetchItinerariesRequest = () => {
  return {
    type: FETCH_ITINERARIES_REQUEST
  };
};

export const fetchItinerariesSuccess = cities => {
  return {
    type: FETCH_ITINERARIES_SUCCESS,
    payload: cities
  };
};

export const fetchItinerariesFailure = error => {
  return {
    type: FETCH_ITINERARIES_FAILURE,
    payload: error
  };
};

export const fetchItineraries = cityItinerariesToBeFetched => {
  return dispatch => {
    dispatch(fetchItinerariesRequest());

    //template literal string

    return fetch(
      `http://localhost:5000/itineraries/${cityItinerariesToBeFetched}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const itineraries = data;

        dispatch(fetchItinerariesSuccess(itineraries));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchItinerariesFailure(errorMessage));
      });
  };
};
