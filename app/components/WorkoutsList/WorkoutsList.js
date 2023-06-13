import { Text, StyleSheet } from "react-native";
import React from "react";
import { View } from "react-native";

const WorkoutsList = ({ el, id, wokoutNum }) => {
  if (el) {
    return (
      <View>
        <Text style={styles.text} key={id}>
          {el}
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.text} key={id}>
          Тренировка {wokoutNum + 1}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "white",
  },
});

export default WorkoutsList;
