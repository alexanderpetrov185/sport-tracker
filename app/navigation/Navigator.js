import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";
import StatisticScreen from "../screens/StatisticScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabStack from "./TabStack";
import LoginScreen from "../screens/LoginScreen";
import WorkoutStack from "./WorkoutStack";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export const Navigator = () => {
  // Navigator
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="App"
      style={{ backgroundColor: "purple" }}
    >
      <>
        <Stack.Screen name={"Tab"} component={TabStack} />
        <Stack.Screen name="MyWorkoutScreen" component={MyWorkoutScreen} />
        <Stack.Screen name="WorkoutStack" component={WorkoutStack} />
        <Stack.Screen name="StatisticScreen" component={StatisticScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </>
    </Stack.Navigator>
  );
};
