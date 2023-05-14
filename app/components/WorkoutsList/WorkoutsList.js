import { Text, StyleSheet } from "react-native";
import React from "react";
import { View } from "react-native";

const WorkoutsList = ({ el, id, wokoutNum }) => {
  if (el) {
    return (
      <View style={styles.container}>
        <Text style={styles.text} key={id}>
          {el}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text} key={id}>
          Тренировка {wokoutNum + 1}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "beige",
    margin: 5,
    padding: 5,
    borderWidth: 5,
  },
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "burlywood",
    borderWidth: 1,
    width: "100%",
  },
});

export default WorkoutsList;
