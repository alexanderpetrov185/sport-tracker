import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./app/navigation/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
