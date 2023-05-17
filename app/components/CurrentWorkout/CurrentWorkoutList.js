import { View, Text, FlatList } from "react-native";
import React from "react";

const ComplexItem = ({ item }) => {
  return item.complexName.map((el) => <Text>{"-" + el}</Text>);
};

const CurrentWorkoutList = ({ workouts }) => {
  return (
    <View>
      <Text>{workouts.customName}</Text>
      <FlatList
        data={workouts}
        renderItem={({ item }) => {
          if (!item.complexName) {
            return <Text>{item.name}</Text>;
          } else {
            return (
              <View>
                <Text>{item.name + ":"}</Text>
                <ComplexItem item={item} />
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default CurrentWorkoutList;
