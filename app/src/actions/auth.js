import AsyncStorage from "@react-native-async-storage/async-storage";
import $api from "../http";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  INIT_SUCCESS,
} from "./types";

// Init (sessions)
export const init = () => (dispatch) => {
  AsyncStorage.getItem("token")
    .then((token) => {
      if (token) {
        dispatch({
          type: INIT_SUCCESS,
        });
      }
    })
    .catch((error) => {
      alert(error);
    });
};

//LOGIN
export const login = (username, password) => (dispatch) => {
  $api
    .post("/auth", { username, password })
    .then((response) => {
      if (response.data.token) {
        AsyncStorage.setItem("token", response.data.token);
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.token,
      });
    })
    .catch((error) => {
      alert(error);
    });
};

// LOGOUT
export const logout = () => (dispatch) => {
  AsyncStorage.removeItem("token");

  dispatch({
    type: LOGOUT,
  });
};

//REGISTER
export const register = (username, password) => (dispatch) => {
  $api
    .post("/register", { username, password })
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      if (response.data.token) {
        alert("вы успешно зарегистрированы");
        AsyncStorage.setItem("token", response.data.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data.token,
        });
      }
    })
    .catch((error) => {
      alert(error);
    });
};
