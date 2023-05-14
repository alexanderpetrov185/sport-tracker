import * as React from "react";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import { View } from "react-native";
import $api from "../src/http";

const MyWorkoutScreen = () => {
  const [dateList, setDateList] = React.useState({
    currentDate: "",
    upcomingDate: "",
  });

  React.useEffect(() => {
    $api.get("/profile/workouts/calendar").then(({ data }) => {
      setDateList({
        currentDate: data.current.scheduledDate.slice(0, 10),
        upcomingDate: data.upcoming.map((el) => el.scheduledDate.slice(0, 10)),
      });
    });
  }, []);

  return (
    <View>
      <CalendarComponent dateList={dateList} />
    </View>
  );
};

export default MyWorkoutScreen;
