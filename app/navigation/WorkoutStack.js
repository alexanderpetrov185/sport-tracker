import React from "react";
import Stack from "./Stack";
import ChoseWorkoutsScreen from "../screens/Workouts/ChoseWorkoutsScreen";
import WorkoutsScreen from "../screens/Workouts/WorkoutsScreen";

const WorkoutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WorkoutsScreen"
        component={WorkoutsScreen}
        options={{ title: "Тренировки" }}
      />
      <Stack.Screen
        name="ChoseWorkoutsScreen"
        component={ChoseWorkoutsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default WorkoutStack;
