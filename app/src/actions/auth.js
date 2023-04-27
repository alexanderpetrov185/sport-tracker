import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthService from "../../src/services/AuthService";
import $api from "../http";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

//LOGIN
export const login = (username, password) => (dispatch) => {
  $api.post("/auth", { username, password }).then((response) => {
    if (response.data.token) {
      AsyncStorage.setItem("token", response.data.token); //либо в username JSON.stringify(response.data)
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data.token,
    });
    return Promise.resolve();
  }),
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    };
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
  $api.post("/register", { username, password }).then(
    (response) => {
      if (response.data.token) {
        AsyncStorage.setItem("token", response.data.token); //либо в username JSON.stringify(response.data)
      }
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
