import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { SectionList } from "react-native";
import { StatusBar } from "expo-status-bar";

const ExerciseList = ({ listOfExercises }) => {
  if (listOfExercises) {
    const newListOfEx = gettingExercises();

    function gettingExercises() {
      return listOfExercises.map((item) => {
        const exercise = {
          title: "",
          data: "",
        };
        exercise.title = item.name;
        if (item.complex) {
          exercise.data = item.complex.map((item) => item.name);
        } else {
          exercise.data = "";
        }
        return exercise;
      });
    }

    return (
      <View style={styles.container}>
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
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "burlywood",
    borderWidth: 1,
    marginTop: 20,
    width: "80%",
  },
  data: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "burlywood",
    borderWidth: 1,
    marginTop: 20,
    width: "100%",
  },
  title: {
    fontSize: 24,
  },
});

export default ExerciseList;
