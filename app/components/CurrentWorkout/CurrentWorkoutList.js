import { View, Text, FlatList } from "react-native";
import React from "react";

const ComplexItem = ({ itemComplex }) => {
  return itemComplex.map((el) => <Text key={el.id}>{"-" + el.name}</Text>);
};

const CurrentWorkoutList = ({ workouts }) => {
  return (
    <View>
      <FlatList
        data={workouts}
        renderItem={({ item }) => {
          if (!item.complex) {
            return <Text key={item.id}>{item.name}</Text>;
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
