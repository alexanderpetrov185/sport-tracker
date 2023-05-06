import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import WorkoutsList from "../../components/WorkoutsList/WorkoutsList";
import $api from "../../src/http";
import ExerciseList from "../../components/WorkoutsList/ExerciseList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const ExercisesScreen = ({ route }) => {
  const [listOfExercises, setListOfExercises] = React.useState();
  const id = route.params.id;

  React.useEffect(() => {
    $api
      .get(`/workouts/${id}`)
      .then(({ data }) => {
        setListOfExercises(data.complex);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);

  return <ExerciseList listOfExercises={listOfExercises} />;
};

export default ExercisesScreen;
