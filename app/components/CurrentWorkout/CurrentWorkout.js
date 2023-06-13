import { View, Text } from "react-native";
import React from "react";
import CurrentWorkoutList from "./CurrentWorkoutList";

const CurrentWorkout = ({ currentWorkout, date }) => {
  if (currentWorkout) {
    const customName = !currentWorkout.customName //если нет кастомного имени выводим "Тренировка"
      ? "Тренировка"
      : currentWorkout.customName;

    return (
      <View style={{ flex: 1 }}>
        {currentWorkout.complex ? (
          <>
            <Text
              style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                paddingRight: 15,
                marginVertical: 3,
              }}
            >
              {customName + ` (${date.slice(0, 10)})`}
            </Text>
            <CurrentWorkoutList workouts={currentWorkout.complex} />
          </>
        ) : (
          <Text>{"В этот день тренировок нет"}</Text>
        )}
      </View>
    );
  } else {
    return (
      <View>
        <Text>{"В этот день тренировок нет"}</Text>
      </View>
    );
  }
};

export default CurrentWorkout;
