import axios from "axios";
import { returnErrors } from "./errorActions";
// import jwt_decode from "jwt-decode";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_USER_ID
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

//logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

//login user
//Register User
export const login = ({ email, password, firstName, lastName }) => dispatch => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log(email);
  //request body//
  const body = JSON.stringify({
    email,
    password,
    firstName,
    lastName
  });

  axios
    .post("http://localhost:5000/login", body, config)

    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );

      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//get user id//
export const getUserId = () => (dispatch, getState) => {
  // dispatch({ type: GET_USER_ID });

  // Both methods: getState and localStorage are not working//
  //Strange: in the tokenconfig function it works...//

  const color = localStorage.getItem("bgcolor");
  console.log(color);

  const token = localStorage.getItem("token");
  console.log(token);

  // axios.post('/user', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //request body//
  const body = JSON.stringify({
    token
  });

  axios
    .post("http://localhost:5000/currentuser", body, config)

    .catch(err => {
      console.log(err);
    });

  // let decoded = jwt_decode(token);
  // console.log(decoded);
};

// setTimeout(function() {
//   let token = localStorage.getItem("authToken");
//   console.log(token);
// }, 500);

// async getToken = (token) => {
//   await localStorage.getItem('token', token);
// }

// const token = localStorage.getItem("token");

// // Headers;
// const config = {
//   headers: {
//     "Content-type": "application/json"
//   }
// };

// //if token, add to headers
// if (token) {
// console.log(token);
// config.headers["x-auth-token"] = token;
// }

// if (token) {
// console.log("line 167");

// }

// //check token and load user/
// export const loadUser = () => (dispatch, getState) => {
//   //user loading
//   dispatch({ type: USER_LOADING });

//   axios
//     .get("/login/user", tokenConfig(getState))
//     .then(res =>
//       dispatch({
//         type: USER_LOADED,
//         payload: res.data
//       })
//     )
//     .catch(err => {
//       dispatch(returnErrors(err.response.data, err.response.status));

//       dispatch({
//         type: AUTH_ERROR
//       });
//     });
// };
