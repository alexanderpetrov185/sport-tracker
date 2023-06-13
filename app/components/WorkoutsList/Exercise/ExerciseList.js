import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import ExerciseItem from "./ExerciseItem";

const ExerciseList = ({ listOfExercises }) => {
  if (listOfExercises) {
    const newListOfEx = gettingExercises();

    function gettingExercises() {
      return listOfExercises.map((item) => {
        const exercise = {
          id: "",
          title: "",
          data: "",
        };
        exercise.id = item.id;
        exercise.title = item.name;
        if (item.complex) {
          exercise.data = item.complex.map((item) => {
            return {
              title: item.name,
              id: item.id,
            };
          });
        } else {
          exercise.data = "";
        }
        return exercise;
      });
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={newListOfEx}
          renderItem={({ item }) => (
            <ExerciseItem title={item.title} data={item.data} id={item.id} />
          )}
        />
      </View>
    );
  }
};

export default ExerciseList;
