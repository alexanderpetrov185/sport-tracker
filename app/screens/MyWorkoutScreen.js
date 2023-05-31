import * as React from "react";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import { Modal, ScrollView, StyleSheet, TextInput, View } from "react-native";
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
  // const dataLoading = useSelector((state) => state.loading);

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

  console.log(dateList.loading);

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
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TextInput
                    onChangeText={onChangeText}
                    value={comment}
                    style={styles.modalText}
                  />
                  <Button
                    mode="elevated"
                    style={{ margin: 10 }}
                    onPress={() => submitWorkout()}
                  >
                    Отправить
                  </Button>
                </View>
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
