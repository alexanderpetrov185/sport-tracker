import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { useDispatch } from "react-redux";
import { changeCurrentWorkout, emptyDay } from "../../src/actions/calendar";

const CalendarComponent = ({ dateList, selectedDate }) => {
  const dispatch = useDispatch();
  let allMarkedDates = [];

  const [selected, setSelected] = useState(selectedDate.slice(0, 10));

  const markedDay = {};

  if (dateList.history.length !== 0) {
    dateList.history.forEach((el) => {
      allMarkedDates.push(el);
      el.workoutDate
        ? (markedDay[el.scheduledDate.slice(0, 10)] = {
            selected: true,
            selectedColor: "#00b36b",
          })
        : (markedDay[el.scheduledDate.slice(0, 10)] = {
            selected: true,
            selectedColor: "red",
          });
    });
  }

  if (dateList.upcoming.length !== 0) {
    dateList.upcoming.forEach((el) => {
      allMarkedDates.push(el);
      markedDay[el.scheduledDate.slice(0, 10)] = {
        selected: true,
        selectedColor: "grey",
      };
    });
  }

  if (dateList.current) {
    allMarkedDates.push(dateList.current),
      dateList.current.workoutDate //если wD тренировки, тренировка выполнена (green)
        ? (markedDay[dateList.current.scheduledDate.slice(0, 10)] = {
            selected: true,
            marked: true,
            selectedColor: "#00b36b",
          })
        : dateList.current.scheduledDate //иначе если есть sD то (purple)
        ? (markedDay[dateList.current.scheduledDate.slice(0, 10)] = {
            selected: true,
            marked: true,
            selectedColor: "purple",
          })
        : dateList.current;
  }

  markedDay[selected] = {
    ...markedDay[selected],
    selected: true,
    customStyles: {
      container: {
        borderWidth: 2,
        borderColor: "blue",
      },
      text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
      },
    },
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
        borderColor: "black",
        height: 330,
      }}
      // Callback that gets called when the user selects a day
      onDayPress={(day) => {
        setSelected(day.dateString);
        findAndSendId(day.dateString);
      }}
      // Mark specific dates as marked
      markingType={"custom"}
      markedDates={markedDay}
    />
  );
};

export default CalendarComponent;
