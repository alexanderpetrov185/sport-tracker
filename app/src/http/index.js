import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const API_URL = "http://192.168.1.44:8080";

const $api = axios.create({
  baseURL: API_URL,
});

// interceptor
// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${AsyncStorage.getItem("token")}`;
//   return config;
// });

export default $api;
