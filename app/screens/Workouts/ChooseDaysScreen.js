import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const Days = [
  { day: "Понедельник", id: 1 },
  { day: "Вторник", id: 2 },
  { day: "Среда", id: 3 },
  { day: "Четверг", id: 4 },
  { day: "Пятница", id: 5 },
  { day: "Суббота", id: 6 },
  { day: "Воскресенье", id: 7 },
];

const submitDays = () => {};

const ChooseDaysScreen = () => {
  return (
    <View>
      <Button mode="elevated" style={{ marginTop: 20 }} onPress={submitDays}>
        Выбрать
      </Button>
      <FlatList
        data={Days}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{item.day}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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

export default ChooseDaysScreen;
