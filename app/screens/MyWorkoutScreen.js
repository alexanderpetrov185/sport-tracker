import * as React from "react";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import { View } from "react-native";
import $api from "../src/http";
import { useFocusEffect } from "@react-navigation/native";

const MyWorkoutScreen = ({ navigation }) => {
  const [dateList, setDateList] = React.useState({
    history: "",
    currentDate: "",
    upcomingDate: "",
  });

  useFocusEffect(
    React.useCallback(() => {
      $api.get("/profile/workouts/calendar").then(({ data }) => {
        setDateList({
          history: data.upcoming.map((el) => el.scheduledDate.slice(0, 10)),
          currentDate: data.current.scheduledDate.slice(0, 10),
          upcomingDate: data.upcoming.map((el) =>
            el.scheduledDate.slice(0, 10)
          ),
        });
        // console.log("currentDate:", data.current.scheduledDate.slice(0, 10));
      });
    }, [navigation])
  );

  return (
    <View>
      <CalendarComponent dateList={dateList} />
    </View>
  );
};

export default MyWorkoutScreen;
