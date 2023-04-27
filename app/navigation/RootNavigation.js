import React from "react";
import { Navigator } from "./Navigator";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";

const RootNavigation = () => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  // if (loading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthStack /> : <Navigator />}
    </NavigationContainer>
  );
};

export default RootNavigation;
