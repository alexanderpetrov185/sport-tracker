import { View, Text, FlatList } from "react-native";
import React from "react";

const ComplexItem = ({ itemComplex }) => {
  return itemComplex.map((el) => <Text key={el.id}>{"-" + el.name}</Text>);
};

const CurrentWorkoutList = ({ workouts }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={workouts}
        renderItem={({ item }) => {
          if (!item.complex) {
            return (
              <View>
                <Text key={item.id}>{item.name}</Text>
              </View>
            );
          } else {
            return (
              <View>
                <Text key={item.id}>{item.name + ":"}</Text>
                <ComplexItem itemComplex={item.complex} />
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default CurrentWorkoutList;
