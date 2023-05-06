import { StyleSheet, Text } from "react-native";
import React from "react";

const ExerciseComplex = ({ data }) => {
  if (data) {
    return data.map((item) => {
      return (
        <Text style={styles.text} key={item.id}>
          {item.title}
        </Text>
      );
    });
  }
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

export default ExerciseComplex;
