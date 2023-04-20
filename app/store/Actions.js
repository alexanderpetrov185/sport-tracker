import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    // для сохранения авторизации текущего пользователя при закрытии приложения
    if (token !== null) {
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    }
  };
};

export const Login = (userName, password) => {
  return async (dispatch) => {
    let token = null;
    // для сохранения авторизации текущего пользователя при закрытии приложения
    if (userName === "currentUser" && password === "currentPassword") {
      token = userName + password; //dummyToken
      await AsyncStorage.setItem("token", token);
    }

    dispatch({
      type: "LOGIN",
      payload: token,
    });
  };
};

export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};
