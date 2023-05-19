import {
  INIT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = { isLoggedIn: false, token: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
