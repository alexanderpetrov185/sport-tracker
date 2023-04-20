import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import WorkoutsList from "../../components/WorkoutsList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const ChoseWorkoutsScreen = () => {
  const [listOfExercises, setListOfExercises] = React.useState([
    {
      title: "Беговая дорожка 5 минут",
      index: 1,
    },
    {
      title: "Разминка (2 круга)",

      exercises: ["x5 Спайдермен", "x5 Подтягивания"],
      index: 2,
    },
    {
      title: "Силовая часть (3 подхода)",
      exercises: ["x10 Жим лежа"],
      index: 3,
    },
    {
      title: "Cindy WOD",
      exercises: ["x10 Подтягивания", "x10 Отжимания", "x15 Приседаний"],
      index: 4,
    },
  ]);

  return (
    <View>
      <FlatList
        data={listOfExercises}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.container}>
            <WorkoutsList el={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChoseWorkoutsScreen;
