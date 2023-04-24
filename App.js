import * as React from "react";
import { Store } from "./app/store/Index";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import RootNavigation from "./app/navigation/RootNavigation";

export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar theme="auto" />
      <RootNavigation />
    </Provider>
  );
}
