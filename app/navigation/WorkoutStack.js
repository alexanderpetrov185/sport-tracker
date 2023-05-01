import React from "react";
import Stack from "./Stack";
import ChoseWorkoutsScreen from "../screens/Workouts/ChoseWorkoutsScreen";
import WorkoutsScreen from "../screens/Workouts/WorkoutsScreen";
import ExercisesScreen from "../screens/Workouts/ExercisesScreen";

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
      <Stack.Screen
        name="ExercisesScreen"
        component={ExercisesScreen}
        options={{ title: "Тренировки" }}
      />
    </Stack.Navigator>
  );
};

export default WorkoutStack;
