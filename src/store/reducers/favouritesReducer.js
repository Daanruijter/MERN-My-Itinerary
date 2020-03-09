import {
  POST_FAVOURITES_SUCCESS,
  POST_FAVOURITES_FAILURE,
  DELETE_FAVOURITES_SUCCESS,
  DELETE_FAVOURITES_FAILURE
} from "../actions/favouriteTypes";

const initialState = {
  favouriteData: "",
  postError: "",
  deleteError: ""
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case POST_FAVOURITES_SUCCESS:
      return {
        ...state,
        favouriteData: action.payload
      };
    case POST_FAVOURITES_FAILURE:
      return {
        postError: ""
      };
    case DELETE_FAVOURITES_SUCCESS:
      return {
        ...state,
        favouriteData: action.payload
      };
    case DELETE_FAVOURITES_FAILURE:
      return {
        deleteError: ""
      };
    default:
      return state;
  }
};
export default reducer;
