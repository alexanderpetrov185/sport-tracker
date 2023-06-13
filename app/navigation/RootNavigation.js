import React from "react";
import { Navigator } from "./Navigator";
import { useSelector } from "react-redux";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";

const RootNavigation = () => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const TempTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "rgb(255, 45, 85)",
      background: "#f5f5f5",
    },
  };

  return (
    <NavigationContainer theme={TempTheme}>
      {!isLoggedIn ? <AuthStack /> : <Navigator />}
    </NavigationContainer>
  );
};

export default RootNavigation;
