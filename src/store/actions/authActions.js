import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./userTypes";

//check token and load user/
export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/login/user", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));

      dispatch({
        type: AUTH_ERROR
      });
    });
};

//Register User
export const register = ({
  firstName,
  lastName,
  email,
  password,
  picture
}) => dispatch => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log(config);
  //request body//
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    picture
  });

  axios
    .post("http://localhost:5000/createaccount", body, config)

    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      console.log(err.response);
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
//setup config/headers and token

export const tokenConfig = getState => {
  //Get token from localStorage
  const token = getState().auth.token;

  // Headers;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //if token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
