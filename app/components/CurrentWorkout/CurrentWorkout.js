import { View, Text } from "react-native";
import React from "react";
import CurrentWorkoutList from "./CurrentWorkoutList";

const CurrentWorkout = ({ currentWorkout, date }) => {
  if (currentWorkout && date) {
    const customName = !currentWorkout.customName //если нет кастомного имени выводим "Тренировка"
      ? `Тренировка (${date.slice(0, 10)}) `
      : currentWorkout.customName + ` (${date.slice(0, 10)}) `;

    return (
      <View style={{ flex: 1 }}>
        <Text>{customName}</Text>
        {currentWorkout.complex ? (
          <CurrentWorkoutList workouts={currentWorkout.complex} />
        ) : (
          <Text>{"В этот день тренировок нет"}</Text>
        )}
      </View>
    );
  } else {
    return (
      <View>
        <Text>{"В этот день тренировок нет"}</Text>
      </View>
    );
  }
};

export default CurrentWorkout;
