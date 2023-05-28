import { View, Text } from "react-native";
import React from "react";
import CurrentWorkoutList from "./CurrentWorkoutList";

const CurrentWorkout = ({ currentWorkout }) => {
  const customName = !currentWorkout.customName //если нет кастомного имени выводим "Тренировка"
    ? "Тренировка: "
    : currentWorkout.customName;

  return (
    <View>
      <Text>{customName}</Text>
      {currentWorkout.complex ? (
        <CurrentWorkoutList workouts={currentWorkout.complex} />
      ) : (
        <Text>{"В этот день тренировок нет"}</Text>
      )}
    </View>
  );
};

export default CurrentWorkout;
