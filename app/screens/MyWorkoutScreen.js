import * as React from "react";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import CurrentWorkout from "../components/CurrentWorkout/CurrentWorkout";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { initCalendar } from "../src/actions/calendar";
import SplashScreen from "./SplashScreen";
import $api from "../src/http";

const MyWorkoutScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [comment, onChangeText] = React.useState();

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
        current: state.calendarReducer.current,
        upcoming: state.calendarReducer.upcoming,
      },
      workout: state.calendarReducer.workout,
      selectedDate: state.calendarReducer.selectedDate,
      comment: state.calendarReducer.comment,
      loading: state.calendarReducer.loading,
    };
  });

  const dataLoading = useSelector((state) => state.calendarReducer.loading);

  function submitWorkout() {
    setModalVisible(!modalVisible);
    const workoutDate = dateList.selectedDate.scheduledDate;
    const id = dateList.selectedDate.id;
    $api
      .post(`/profile/workouts/calendar/${id}`, { comment, workoutDate })
      .then((response) => {
        if (response.status === 200) dispatch(initCalendar());
      })
      .catch((error) => alert("submitWorkout", error));
  }

  if (!dataLoading) {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View>
          <CalendarComponent
            dateList={dateList.dates}
            selectedDate={dateList.selectedDate.scheduledDate}
          />
          <Button
            mode="elevated"
            style={{ margin: 10 }}
            onPress={() => setModalVisible(true)}
          >
            Подтвердить тренировку
          </Button>
        </View>
        {dateList.comment ? <Text>{dateList.comment}</Text> : <></>}
        <CurrentWorkout
          date={dateList.selectedDate.scheduledDate}
          currentWorkout={dateList.workout}
        />
        <View>
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
                    multiline={true}
                    numberOfLines={5}
                    maxLength={50}
                    placeholder="Some comment here"
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
        </View>
      </View>
    );
  } else return <SplashScreen />;
};

export default MyWorkoutScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  modalView: {
    width: "85%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
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
  modalText: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    textAlign: "left",
  },
});
