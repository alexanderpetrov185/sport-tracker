import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import $api from "../../src/http";

const Days = [
  { day: "Monday", selected: null, id: 1 },
  { day: "Tuesday", selected: null, id: 2 },
  { day: "Wednesday", selected: null, id: 3 },
  { day: "Thursday", selected: null, id: 4 },
  { day: "Friday", selected: null, id: 5 },
  { day: "Saturday", selected: null, id: 6 },
  { day: "Sunday", selected: null, id: 7 },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.text, { backgroundColor }]}
  >
    <Text style={[{ color: textColor }]}>{item.day}</Text>
  </TouchableOpacity>
);

const ChoseDaysScreen = ({ route, navigation }) => {
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({ item }) => {
    if (item.id === selectedId) {
      item.selected = !item.selected;
    }

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={item.selected ? "#ffe" : "#000"}
        textColor={item.selected ? "#000" : "#ffe"}
      />
    );
  };

  const workoutPlan = route.params.id;

  const submitDays = () => {
    const schedule = Days.filter((el) => {
      if (el.selected) {
        return el.day;
      }
    }).map((el) => el.day);

    console.log("schedule", schedule);

    $api
      .post("/profile/workouts", { workoutPlan, schedule })
      .then((response) => {
        if (response) navigation.navigate("MyWorkoutScreen");
      })
      .catch((error) => {
        alert(error);
      });

    // navigation.navigate("MyWorkoutScreen");
  };

  return (
    <View style={styles.container}>
      <Button mode="elevated" style={{ margin: 20 }} onPress={submitDays}>
        Выбрать
      </Button>
      <FlatList
        data={Days}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
  },
});

export default ChoseDaysScreen;
