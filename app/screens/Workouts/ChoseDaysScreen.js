import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
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

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.text, { backgroundColor }]}
  >
    <Text style={[{ color: textColor }]}>{item.day}</Text>
  </TouchableOpacity>
);

const ChoseDaysScreen = () => {
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Button mode="elevated" style={{ marginTop: 20 }} onPress={submitDays}>
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
