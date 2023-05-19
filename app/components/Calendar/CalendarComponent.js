import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const CalendarComponent = ({ dateList }) => {
  const [selected, setSelected] = useState();

  let markedDay = {
    [selected]: {
      selected: true,
      disableTouchEvent: true,
    },
  };
  if (dateList.history) {
    dateList.history.map((date) => {
      markedDay[date] = {
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

  if (dateList.upcomingDate) {
    dateList.upcomingDate.map((date) => {
      markedDay[date] = {
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
        console.log("selected day", day);
        setSelected(day.dateString);
      }}
      // Mark specific dates as marked
      markedDates={markedDay}
    />
  );
};

export default CalendarComponent;
