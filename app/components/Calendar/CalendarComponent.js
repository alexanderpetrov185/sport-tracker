import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentWorkout } from "../../src/actions/calendar";

const CalendarComponent = ({ dateList }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState();

  const upcomingDates = useSelector(
    (state) => state.calendarReducer.upcomingDates
  );
  const currentDate = useSelector((state) => state.calendarReducer.currentDate);
  const history = useSelector((state) => state.calendarReducer.history);
  const allMarkedDates = [...upcomingDates, currentDate, ...history];

  function findAndSendId(selectedDay) {
    const dayId = allMarkedDates.find(({ date }) => date === selectedDay).id;
    if (dayId) {
      dispatch(changeCurrentWorkout(dayId));
    }
  }

  let markedDay = {
    [selected]: {
      selected: true,
      selectedColor: "green",
    },
  };

  if (dateList.history) {
    dateList.history.map((el) => {
      markedDay[el.date] = {
        selected: true,
        selectedColor: "red",
      };
    });
  }

  if (dateList.currentDate) {
    markedDay[dateList.currentDate] = {
      selected: true,
      marked: true,
      selectedColor: "purple",
    };
  }

  if (dateList.upcomingDates) {
    dateList.upcomingDates.map((el) => {
      markedDay[el.date] = {
        selected: true,
        selectedColor: "grey",
      };
    });
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
