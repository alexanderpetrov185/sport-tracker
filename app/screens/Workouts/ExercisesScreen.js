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

const ExercisesScreen = () => {
  const [listOfExercises, setListOfExercises] = React.useState();

  React.useEffect(() => {
    $api
      .get("/exercises")
      .then(({ data }) => {
        setListOfExercises(data);
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
