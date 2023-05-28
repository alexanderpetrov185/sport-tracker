import * as React from "react";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import { Modal, TextInput, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import CurrentWorkout from "../components/CurrentWorkout/CurrentWorkout";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { initCalendar } from "../src/actions/calendar";
import SplashScreen from "./SplashScreen";
import $api from "../src/http";

const MyWorkoutScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [comment, onChangeText] = React.useState("Some comment here");

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
        currentDate: state.calendarReducer.currentDate,
        upcomingDates: state.calendarReducer.upcomingDates,
      },
      workout: state.calendarReducer.workout,
      loading: state.calendarReducer.loading,
    };
  });

  const dataLoading = dateList.loading;

  function submitWorkout() {
    setModalVisible(!modalVisible);
    const workoutDate = dateList.dates.currentDate.scheduledDate;
    const id = dateList.dates.currentDate.id;
    $api
      .post(`/profile/workouts/calendar/${id}`, { comment, workoutDate })
      .then((response) => {
        if (response.status === 200) dispatch(initCalendar());
      })
      .catch((error) => alert(error));
  }

  return (
    <>
      {!dataLoading ? (
        <View>
          <CalendarComponent dateList={dateList.dates} />
          <Button
            mode="elevated"
            style={{ margin: 10 }}
            onPress={() => setModalVisible(true)}
          >
            Подтвердить тренировку
          </Button>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={{ backgroundColor: "rgba(168, 157, 157, 1);" }}>
                <TextInput onChangeText={onChangeText} value={comment} />
                <Button
                  mode="elevated"
                  style={{ margin: 10 }}
                  onPress={() => submitWorkout()}
                >
                  Отправить
                </Button>
              </View>
            </Modal>
          </View>
          <CurrentWorkout currentWorkout={dateList.workout} />
        </View>
      ) : (
        <SplashScreen />
      )}
    </>
  );
};

export default MyWorkoutScreen;
