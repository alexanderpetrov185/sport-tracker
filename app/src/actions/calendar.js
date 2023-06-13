import $api from "../http";
import {
  CHANGE_CALENDAR,
  INIT_CALENDAR,
  EMPTYDAY_CALENDAR,
  RELOAD_CALENDAR,
} from "./types";

// Init
export const initCalendar = () => (dispatch) => {
  $api
    .get("/profile/workouts/calendar")
    .then(({ data }) => {
      dispatch({
        type: INIT_CALENDAR,
        payload: {
          history: data.history,
          current: data.current,
          upcoming: data.upcoming,
        },
      });
    })
    .catch((error) => {
      alert(error);
    });
};

export const reloadCalendar = () => (dispatch) => {
  $api
    .get("/profile/workouts/calendar")
    .then(({ data }) => {
      dispatch({
        type: RELOAD_CALENDAR,
        payload: {
          history: data.history,
          current: data.current,
          upcoming: data.upcoming,
        },
      });
    })
    .catch((error) => {
      alert(error);
    });
};

export const changeCurrentWorkout = (id) => (dispatch) => {
  $api
    .get(`/profile/workouts/calendar/${id}`)
    .then(({ data }) => {
      dispatch({
        type: CHANGE_CALENDAR,
        payload: {
          selectedDate: data,
          workout: data.workout,
          comment: data.comment,
        },
      });
    })
    .catch((error) => {
      alert(error);
    });
};

export const emptyDay = () => (dispatch) => {
  dispatch({
    type: EMPTYDAY_CALENDAR,
    payload: {
      workout: [],
    },
  });
};
