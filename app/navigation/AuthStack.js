import * as React from "react";
import LoginScreen from "../screens/LoginScreen";
import Stack from "./Stack";

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
    </Stack.Navigator>
  );
};
