import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import CurrentWorkoutList from "./CurrentWorkoutList";

const CurrentWorkout = ({ currentWorkout }) => {
  const customName = !currentWorkout.customName //если нет кастомного имени выводим "Тренировка"
    ? "Тренировка: "
    : currentWorkout.customName;

  return (
    <View style={styles.container}>
      <Text>{customName}</Text>
      <CurrentWorkoutList workouts={currentWorkout.complex} />
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
