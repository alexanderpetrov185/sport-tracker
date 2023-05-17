import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import CurrentWorkoutList from "./CurrentWorkoutList";

const CurrentWorkout = ({ currentWorkout }) => {
  return (
    <View style={styles.container}>
      <Text>{currentWorkout.customName}</Text>
      <CurrentWorkoutList workouts={currentWorkout.workout} />
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
