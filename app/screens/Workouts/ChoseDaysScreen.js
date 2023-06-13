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
  { day: "Monday", selected: false, id: 1 },
  { day: "Tuesday", selected: false, id: 2 },
  { day: "Wednesday", selected: false, id: 3 },
  { day: "Thursday", selected: false, id: 4 },
  { day: "Friday", selected: false, id: 5 },
  { day: "Saturday", selected: false, id: 6 },
  { day: "Sunday", selected: false, id: 7 },
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
        onPress={() => {
          if (item.id === selectedId) {
            setSelectedId();
            item.selected = !item.selected;
          } else {
            setSelectedId(item.id);
          }
        }}
        backgroundColor={item.selected ? "#ffe" : "#000"}
        textColor={item.selected ? "#000" : "#ffe"}
      />
    );
  };

  const workoutPlan = route.params.id;

  const submitDays = () => {
    const schedule = Days.filter((el) => {
      if (el.selected) return el.day;
    }).map((el) => el.day);

    if (schedule.length > 0) {
      $api
        .post("/profile/workouts", { workoutPlan, schedule })
        .then((response) => {
          if (response) {
            navigation.navigate("MyWorkoutScreen");
            navigation.reset({
              index: 0,
              routes: [{ name: "MyWorkoutScreen" }],
            });
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Вы должны выбрать дни");
    }
  };

  return (
    <View style={styles.container}>
      <Button
        mode="elevated"
        textColor="white"
        style={{
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: "black",
          borderWidth: 1,
          borderColor: "white",
        }}
        onPress={submitDays}
      >
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
    marginHorizontal: 20,
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
