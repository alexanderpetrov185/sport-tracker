import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import StatisticScreen from "../screens/StatisticScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { TabStack } from "./TabNavigation";

export const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="App"
    >
      <Stack.Screen name={"Tab"} component={TabStack} />
      <Stack.Screen name="MyWorkoutScreen" component={MyWorkoutScreen} />
      <Stack.Screen name="WorkoutsScreen" component={WorkoutsScreen} />
      <Stack.Screen name="StatisticScreen" component={StatisticScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
