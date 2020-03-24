import jwt_decode from "jwt-decode";
import axios from "axios";

import {
  FETCH_ITINERARIES_REQUEST,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAILURE,
  PUT_ITINERARIES_COUNT_REQUEST,
  PUT_ITINERARIES_COUNT_SUCCESS,
  PUT_ITINERARIES_COUNT_FAILURE
} from "./itineraryTypes";
import { fetchFavourites } from "./favouriteActions";

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

//Put favourite itinerary in counter//

export const putItinerariesCountRequest = () => {
  return {
    type: PUT_ITINERARIES_COUNT_REQUEST
  };
};

export const putItinerariesCountSuccess = () => {
  return {
    type: PUT_ITINERARIES_COUNT_SUCCESS,
    payload: "put successfully"
  };
};

export const putItinerariesCountFailure = error => {
  return {
    type: PUT_ITINERARIES_COUNT_FAILURE,
    payload: error
  };
};

export const putItinerariesCount = itineraryId => dispatch => {
  let headers = {
    // "Content-Type": "application/x-www-form-urlencoded",
    // "x-auth-token": localStorage.getItem("token")
  };

  let currentItinerary = itineraryId;
  let body = "";

  axios
    .put(
      `http://localhost:5000/itineraries/putitinerariestocount/${currentItinerary}`,
      body,
      {
        headers
      }
    )

    .then(res => {
      dispatch({
        type: PUT_ITINERARIES_COUNT_REQUEST
      });
      // console.log("line 23");
      dispatch({
        type: PUT_ITINERARIES_COUNT_SUCCESS,
        payload: res.data
      });
      // console.log(res);
    })
    .catch(err => {
      dispatch({
        type: PUT_ITINERARIES_COUNT_FAILURE,
        payload: err.response
      });

      // console.log(err.response);
    });
};
