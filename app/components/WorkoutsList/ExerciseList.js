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
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
  },
});

export default ExerciseList;

{
  /* <View style={styles.container}>
<SectionList
  sections={newListOfEx}
  renderItem={({ item }) => (
    <View style={styles.item}>
      <Text style={styles.data}>{item}</Text>
    </View>
  )}
  renderSectionHeader={({ section: { title } }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )}
/>
</View> */
}
