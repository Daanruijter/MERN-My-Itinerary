import {
  POST_FAVOURITES_REQUEST,
  POST_FAVOURITES_SUCCESS,
  POST_FAVOURITES_FAILURE,
  ADD_FAVOURITES_REQUEST,
  ADD_FAVOURITES_SUCCESS,
  ADD_FAVOURITES_FAILURE
} from "./favouriteTypes";

import axios from "axios";

//Send user token
export const postFavourites = favouriteData => dispatch => {
  //headers
  console.log("postFavourites executed, line 203");
  console.log(favouriteData);
  let headers = {
    // "Content-Type": "application/x-www-form-urlencoded",
    // "x-auth-token": localStorage.getItem("token")
  };
  let body = favouriteData;
  console.log(body);
  console.log(body.currentUserId);
  let currentUserId = body.currentUserId;

  // to={`/itinerary/${props.id}/${props.cityname}`}
  // .post(`{http://localhost:5000/favourites/${currentUserId}`, body, {

  axios
    .post(`http://localhost:5000/favourites/${currentUserId}`, body, {
      headers
    })
    .then(res => {
      console.log("line 23");
      dispatch({
        type: POST_FAVOURITES_SUCCESS,
        payload: res.data
      });
      console.log(res);
    })

    .catch(err => {
      dispatch({
        type: POST_FAVOURITES_FAILURE,
        payload: err.response
      });

      console.log(err.response);
    });
};
