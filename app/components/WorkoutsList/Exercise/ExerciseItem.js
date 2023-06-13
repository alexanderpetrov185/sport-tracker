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
    backgroundColor: "black",
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
  text: {
    fontWeight: 700,
    fontSize: 20,
    textAlign: "center",
    color: "white",
    margin: 10,
  },
});

export default ExerciseItem;
