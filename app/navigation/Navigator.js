import * as React from "react";
import TabStack from "./TabStack";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutStack from "./Workouts/WorkoutStack";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="App"
      style={{ backgroundColor: "purple" }}
    >
      <>
        <Stack.Screen name={"Tab"} component={TabStack} />
        <Stack.Screen name={"WorkoutStack"} component={WorkoutStack} />
      </>
    </Stack.Navigator>
  );
};
