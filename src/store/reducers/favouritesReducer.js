import {
  POST_FAVOURITES_REQUEST,
  POST_FAVOURITES_SUCCESS,
  POST_FAVOURITES_FAILURE,
  ADD_FAVOURITES_REQUEST,
  ADD_FAVOURITES_SUCCESS,
  ADD_FAVOURITES_FAILURE
} from "./favouriteTypes";

const initialState = {
  favouriteData: "",
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FAVOURITES_SUCCESS:
      return {
        ...state,
        favouriteTypes: action.payload
      };
    case POST_FAVOURITES_FAILURE:
      return {
        error: ""
      };
    default:
      return state;
  }
};
export default reducer;
