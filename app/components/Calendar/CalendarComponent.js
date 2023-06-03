import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { useDispatch } from "react-redux";
import { changeCurrentWorkout, emptyDay } from "../../src/actions/calendar";

const CalendarComponent = ({ dateList }) => {
  const dispatch = useDispatch();
  let allMarkedDates = [];

  const [selected, setSelected] = useState();
  const markedDay = {};

  dateList.history.length !== 0
    ? dateList.history.forEach((el) => {
        allMarkedDates.push(el);
        el.workoutDate
          ? (markedDay[el.scheduledDate.slice(0, 10)] = {
              selected: true,
              selectedColor: "green",
            })
          : (markedDay[el.scheduledDate.slice(0, 10)] = {
              selected: true,
              selectedColor: "red",
            });
      })
    : dateList.history;

  dateList.upcoming.length !== 0
    ? dateList.upcoming.forEach((el) => {
        allMarkedDates.push(el);
        markedDay[el.scheduledDate.slice(0, 10)] = {
          selected: true,
          selectedColor: "grey",
        };
      })
    : dateList.upcoming;

  dateList.current
    ? (allMarkedDates.push(dateList.current),
      dateList.current.workoutDate
        ? (markedDay[dateList.current.scheduledDate.slice(0, 10)] = {
            selected: true,
            marked: true,
            selectedColor: "green",
          })
        : dateList.current.scheduledDate
        ? (markedDay[dateList.current.scheduledDate.slice(0, 10)] = {
            selected: true,
            marked: true,
            selectedColor: "purple",
          })
        : dateList.current)
    : dateList.current;

  markedDay[selected] = {
    selected: true,
    selectedColor: "blue",
  };

  function findAndSendId(selectedDay) {
    const dayToSelect = allMarkedDates.find(
      ({ scheduledDate }) => scheduledDate.slice(0, 10) === selectedDay
    );
    if (dayToSelect) {
      dispatch(changeCurrentWorkout(dayToSelect.id));
    } else {
      dispatch(emptyDay());
    }
  }

  return (
    <Calendar
      // Customize the appearance of the calendar
      style={{
        borderWidth: 1,
        borderColor: "gray",
        height: 350,
      }}
      // Callback that gets called when the user selects a day
      onDayPress={(day) => {
        setSelected(day.dateString);
        findAndSendId(day.dateString);
      }}
      // Mark specific dates as marked
      markedDates={markedDay}
    />
  );
};

export default CalendarComponent;
