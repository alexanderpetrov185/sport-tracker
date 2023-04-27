import AsyncStorage from "@react-native-async-storage/async-storage";
import $api from "../http";

export class AuthService {
  login(username, password) {
    return $api.post("/auth", { username, password }).then((response) => {
      console.log(response);
      if (response.data.token) {
        AsyncStorage.setItem("token", token); //либо в username JSON.stringify(response.data)
      }

      return response.data;
    });
  }

  // logout() {
  //   AsyncStorage.removeItem("token");
  // }

  // register(username, email, password) {
  //   return $api.post("/register", {
  //     username,
  //     email,
  //     password,
  //   });
  // }
}

export default AuthService;
