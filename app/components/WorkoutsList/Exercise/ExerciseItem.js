import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExerciseComplex from "./ExerciseComplex";

const ExerciseItem = ({ title, data, id }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} key={id}>
        {title}
      </Text>
      <ExerciseComplex data={data} />
    </View>
  );
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

export default ExerciseItem;
