import * as React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import RootNavigation from "./app/navigation/RootNavigation";
import store from "./app/src/reducers/authReducer";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar theme="auto" />
      <RootNavigation />
    </Provider>
  );
}
