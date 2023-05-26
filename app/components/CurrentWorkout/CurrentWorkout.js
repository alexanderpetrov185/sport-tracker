import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import CurrentWorkoutList from "./CurrentWorkoutList";

const CurrentWorkout = ({ currentWorkout }) => {
  const customName = !currentWorkout.customName //если нет кастомного имени выводим "Тренировка"
    ? "Тренировка: "
    : currentWorkout.customName;

  console.log(currentWorkout.complex);

  return (
    <View style={styles.container}>
      <Text>{customName}</Text>
      {currentWorkout.complex ? (
        <CurrentWorkoutList workouts={currentWorkout.complex} />
      ) : (
        <Text>{"В этот день тренировок нет"}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
  },
});

export default CurrentWorkout;
