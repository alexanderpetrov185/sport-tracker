import * as React from "react";
import LoginScreen from "../screens/LoginScreen";
import Stack from "./Stack";
import RegisterScreen from "../screens/RegisterScreen";

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
      <Stack.Screen name={"RegisterScreen"} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
