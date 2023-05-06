import { Text, StyleSheet } from "react-native";
import React from "react";

const WorkoutsList = ({ el, id }) => {
  return (
    <Text style={styles.text} key={id}>
      {el}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "burlywood",
    borderWidth: 1,
    marginTop: 20,
    width: "80%",
  },
});

export default WorkoutsList;
