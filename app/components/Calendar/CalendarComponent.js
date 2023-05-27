import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { useDispatch } from "react-redux";
import { changeCurrentWorkout, emptyDay } from "../../src/actions/calendar";

const CalendarComponent = ({ dateList }) => {
  const dispatch = useDispatch();

  const allMarkedDates = [
    ...dateList.history,
    dateList.currentDate,
    ...dateList.upcomingDates,
  ];

  function findAndSendId(selectedDay) {
    const dayId = allMarkedDates.find(
      ({ date }) => date.slice(0, 10) === selectedDay
    );
    if (dayId) {
      dispatch(changeCurrentWorkout(dayId.id));
    } else {
      dispatch(emptyDay());
    }
  }

  const [selected, setSelected] = useState();
  const markedDay = {};

  // нет проверки на undefined входящего массива для методов forEach, slice
  dateList.history.forEach((el) => {
    markedDay[el.date.slice(0, 10)] = {
      selected: true,
      selectedColor: "red",
    };
  });

  markedDay[dateList.currentDate.date.slice(0, 10)] = {
    selected: true,
    marked: true,
    selectedColor: "purple",
  };

  dateList.upcomingDates.forEach((el) => {
    markedDay[el.date.slice(0, 10)] = {
      selected: true,
      selectedColor: "grey",
    };
  });

  markedDay[selected] = {
    selected: true,
    selectedColor: "blue",
  };

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
