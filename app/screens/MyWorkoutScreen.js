import * as React from "react";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import { View } from "react-native";
import $api from "../src/http";

const MyWorkoutScreen = () => {
  $api.get("/profile/workouts/calendar").then(({ data }) => console.log(data));

  return (
    <View>
      <CalendarComponent />
    </View>
  );
};

export default MyWorkoutScreen;
