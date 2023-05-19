import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useSelector } from "react-redux";
import { changeCalendar } from "../../src/actions/calendar";

const CalendarComponent = ({ dateList }) => {
  const upcomingDates = useSelector(
    (state) => state.calendarReducer.upcomingDates
  );
  console.log(upcomingDates);

  const [selected, setSelected] = useState();

  let markedDay = {
    [selected]: {
      selected: true,
      disableTouchEvent: true,
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
        // console.log(day);
        setSelected(day.dateString);
        changeCalendar();
      }}
      // Mark specific dates as marked
      markedDates={markedDay}
    />
  );
};

export default CalendarComponent;
