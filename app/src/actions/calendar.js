import { useSelector } from "react-redux";
import $api from "../http";
import { CHANGE_CALENDAR, INIT_CALENDAR, EMPTYDAY_CALENDAR } from "./types";

// Init
export const initCalendar = () => (dispatch) => {
  $api.get("/profile/workouts/calendar").then(({ data }) => {
    dispatch({
      type: INIT_CALENDAR,
      payload: {
        history: data.history.map((el) => {
          return {
            id: el.id,
            date: el.scheduledDate,
          };
        }),
        currentDate: {
          id: data.current.id,
          date: data.current.scheduledDate,
        },
        upcomingDates: data.upcoming.map((el) => {
          return {
            id: el.id,
            date: el.scheduledDate,
          };
        }),
        workout: data.current.workout,
      },
    });
  });
};

export const changeCurrentWorkout = (id) => (dispatch) => {
  $api.get(`/profile/workouts/calendar/${id}`).then(({ data }) => {
    dispatch({
      type: CHANGE_CALENDAR,
      payload: {
        workout: data.workout,
      },
    });
  });
};

export const emptyDay = () => (dispatch) => {
  dispatch({
    type: EMPTYDAY_CALENDAR,
  });
};
