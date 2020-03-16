import {
  POST_FAVOURITES_SUCCESS,
  POST_FAVOURITES_FAILURE,
  DELETE_FAVOURITES_SUCCESS,
  DELETE_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_REQUEST,
  FETCH_FAVOURITES_SUCCESS,
  FETCH_FAVOURITES_FAILURE
} from "./favouriteTypes";

import jwt_decode from "jwt-decode";
import axios from "axios";

//Post favourites
export const postFavourites = favouriteData => dispatch => {
  //headers
  // console.log("postFavourites executed, line 203");
  // console.log(favouriteData);
  let headers = {
    // "Content-Type": "application/x-www-form-urlencoded",
    // "x-auth-token": localStorage.getItem("token")
  };
  let favourites = favouriteData;

  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  // console.log(decoded);

  let currentUserId = decoded.id;
  // console.log(body);
  // console.log(body.currentUserId);

  let body = { itineraryId: favourites.itineraryId };
  // console.log(body);

  // to={`/itinerary/${props.id}/${props.cityname}`}
  // .post(`{http://localhost:5000/favourites/${currentUserId}`, body, {

  axios
    .post(`http://localhost:5000/favourites/${currentUserId}`, body, {
      headers
    })
    .then(res => {
      // console.log("line 23");
      dispatch({
        type: POST_FAVOURITES_SUCCESS,
        payload: res.data
      });
      // console.log(res);
      dispatch(fetchFavourites(currentUserId));
    })
    .catch(err => {
      dispatch({
        type: POST_FAVOURITES_FAILURE,
        payload: err.response
      });

      // console.log(err.response);
    });
};

//Delete favourites
export const deleteFavourites = favouriteData => dispatch => {
  let itineraryId = favouriteData.itineraryId;

  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  // console.log(decoded);

  let currentUserId = decoded.id;
  // console.log(favouriteData);
  // console.log("deleteFavourites executed, line 53");
  let headers = {
    Authorization: localStorage.getItem("token")
  };
  let body = "test";

  // to={`/itinerary/${props.id}/${props.cityname}`}
  // .post(`{http://localhost:5000/favourites/${currentUserId}`, body, {

  axios
    .delete(
      `http://localhost:5000/favourites/delete/${currentUserId}/${itineraryId}`,
      body,
      {
        headers
      }
    )

    .then(res => {
      // console.log("line 23");
      dispatch({
        type: DELETE_FAVOURITES_SUCCESS,
        payload: res.data
      });
      // console.log(res);
      let currentUserIdToFetch = currentUserId;
      dispatch(fetchFavourites(currentUserIdToFetch));
    })
    .catch(err => {
      dispatch({
        type: DELETE_FAVOURITES_FAILURE,
        payload: err.response
      });

      // console.log(err.response);
    });
};

//FETCH THE FAVOURITES//

//fetch data//
export const fetchFavouritesRequest = () => {
  return {
    type: FETCH_FAVOURITES_REQUEST
  };
};

export const fetchFavouritesSuccess = favourites => {
  // console.log(favourites);
  return {
    type: FETCH_FAVOURITES_SUCCESS,
    payload: favourites
  };
};

export const fetchFavouritesFailure = error => {
  return {
    type: FETCH_FAVOURITES_FAILURE,
    payload: error
  };
};

export const fetchFavourites = currentUserIdToFetch => {
  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  console.log(decoded);

  let currentUserId = decoded.id;

  return dispatch => {
    dispatch(fetchFavouritesRequest());

    return fetch(
      `http://localhost:5000/favourites/getfavourites/${currentUserId}`,
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
        const favourites = data;
        console.log(data);

        dispatch(fetchFavouritesSuccess(favourites));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchFavouritesFailure(errorMessage));
      });
  };
};

// let favourites = favouriteData;
// let currentUserId = favourites.currentUserId;
