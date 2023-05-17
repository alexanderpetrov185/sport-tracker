import { View, Text, FlatList } from "react-native";
import React from "react";

const ComplexItem = ({ item }) => {
  return item.complex.map((el) => (
    <Text key={el.idComplex}>{"-" + el.nameComplex}</Text>
  ));
};

const CurrentWorkoutList = ({ workouts }) => {
  return (
    <View>
      <Text>{workouts.customName}</Text>
      <FlatList
        data={workouts}
        renderItem={({ item }) => {
          if (!item.complex) {
            return <Text key={item.id}>{item.name}</Text>;
          } else {
            return (
              <View>
                <Text key={item.id}>{item.name + ":"}</Text>
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
