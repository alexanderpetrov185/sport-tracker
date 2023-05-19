import * as React from "react";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import { View } from "react-native";
import $api from "../src/http";
import { useFocusEffect } from "@react-navigation/native";
import CurrentWorkout from "../components/currentWorkout/currentWorkout";
import { Button } from "react-native-paper";

const MyWorkoutScreen = ({ navigation }) => {
  const [dateList, setDateList] = React.useState({
    history: "",
    currentDate: "",
    upcomingDate: "",
  });

  const [currentWorkout, setCurrentWorkout] = React.useState({
    customName: "Тренировка:",
    workout: {},
  });

  //change calendar state
  useFocusEffect(
    React.useCallback(() => {
      $api.get("/profile/workouts/calendar").then(({ data }) => {
        setDateList({
          history: data.history.map((el) => el.scheduledDate.slice(0, 10)),
          currentDate: data.current.scheduledDate.slice(0, 10),
          upcomingDate: data.upcoming.map((el) =>
            el.scheduledDate.slice(0, 10)
          ),
        });

        //transform data for current workout
        if (data.current.workout.customName) {
          setCurrentWorkout((prevState) => ({
            ...prevState,
            customName: data.current.workout.customName,
          }));
        }
        //transform data for current workout
        setCurrentWorkout((prevState) => ({
          ...prevState,
          workout: data.current.workout.complex.map((el) => {
            let workout = { name: el.name, id: el.id };
            if (el.complex) {
              workout.complex = el.complex.map((el) => {
                return {
                  nameComplex: el.name,
                  idComplex: el.id,
                };
              });
            }
            return workout;
          }),
        }));
      });
    }, [navigation])
  );

  return (
    <View>
      <CalendarComponent dateList={dateList} />
      <Button mode="elevated" style={{ margin: 10 }}>
        Подтвердить тренировку
      </Button>
      <CurrentWorkout currentWorkout={currentWorkout} />
    </View>
  );
};

export default MyWorkoutScreen;
