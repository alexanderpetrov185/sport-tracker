import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import WorkoutsList from "../../components/WorkoutsList";
import $api from "../../src/http";

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
        console.log(data.complex);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={listOfExercises}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.container}>
            <WorkoutsList el={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ExercisesScreen;
