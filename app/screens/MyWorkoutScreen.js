import * as React from "react";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import CurrentWorkout from "../components/currentWorkout/currentWorkout";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { initCalendar } from "../src/actions/calendar";

const MyWorkoutScreen = ({ navigation }) => {
  // change calendar state
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(initCalendar());
    }, [navigation])
  );

  const dateList = useSelector((state) => {
    return {
      dates: {
        history: state.calendarReducer.history,
        currentDate: state.calendarReducer.currentDate.date,
        upcomingDates: state.calendarReducer.upcomingDates,
      },
      workout: state.calendarReducer.workout,
    };
  });

  return (
    <View>
      <CalendarComponent dateList={dateList.dates} />
      <Button mode="elevated" style={{ margin: 10 }}>
        Подтвердить тренировку
      </Button>
      <CurrentWorkout currentWorkout={dateList.workout} />
    </View>
  );
};

export default MyWorkoutScreen;
