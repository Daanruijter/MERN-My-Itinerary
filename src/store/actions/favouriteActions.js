import {
  POST_FAVOURITES_SUCCESS,
  POST_FAVOURITES_FAILURE,
  DELETE_FAVOURITES_SUCCESS,
  DELETE_FAVOURITES_FAILURE
} from "./favouriteTypes";

import axios from "axios";

//Post favourites
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

axios.delete(URL, {
  headers: {},
  data: {
    source: "test"
  }
});

//Delete favourites
export const deleteFavourites = favouriteData => dispatch => {
  let currentUserId = favouriteData.currentUserId;
  console.log(favouriteData);
  console.log("deleteFavourites executed, line 53");
  let headers = {
    Authorization: localStorage.getItem("token")
  };
  let body = {
    source: "test"
  };

  // to={`/itinerary/${props.id}/${props.cityname}`}
  // .post(`{http://localhost:5000/favourites/${currentUserId}`, body, {

  axios
    .delete(`http://localhost:5000/favourites/delete/${currentUserId}`, body, {
      headers
    })
    .then(res => {
      console.log("line 23");
      dispatch({
        type: DELETE_FAVOURITES_SUCCESS,
        payload: res.data
      });
      console.log(res);
    })

    .catch(err => {
      dispatch({
        type: DELETE_FAVOURITES_FAILURE,
        payload: err.response
      });

      console.log(err.response);
    });
};
