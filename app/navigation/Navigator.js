import * as React from "react";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";
import StatisticScreen from "../screens/StatisticScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabStack from "./TabStack";
import Stack from "./Stack";
import WorkoutStack from "./WorkoutStack";

export const Navigator = () => {
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
