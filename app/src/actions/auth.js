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

export const login = (username, password) => (dispatch) => {
  $api
    .post("/auth", { username, password })
    .then((response) => {
      if (response.data.token) {
        AsyncStorage.setItem("token", response.data.token); //либо в username JSON.stringify(response.data)
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.token,
      });
      return Promise.resolve();
    })
    .catch((error) => {
      // Handle any errors that occur
      console.error(error);
    });
};

export const logout = () => (dispatch) => {
  AsyncStorage.removeItem("token");

  dispatch({
    type: LOGOUT,
  });
};
