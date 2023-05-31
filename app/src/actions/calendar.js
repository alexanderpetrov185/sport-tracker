import $api from "../http";
import { CHANGE_CALENDAR, INIT_CALENDAR, EMPTYDAY_CALENDAR } from "./types";

// Init
export const initCalendar = () => (dispatch) => {
  $api
    .get("/profile/workouts/calendar")
    .then(({ data }) => {
      // if (data.current) {
      //если есть дата текущей тренировки
      dispatch({
        type: INIT_CALENDAR,
        payload: {
          history: data.history.map((el) => {
            return {
              id: el.id,
              scheduledDate: el.scheduledDate,
              workoutDate: el.workoutDate,
            };
          }),
          currentDate: {
            id: data.current.id,
            scheduledDate: data.current.scheduledDate,
            workoutDate: data.current.workoutDate,
          },
          upcomingDates: data.upcoming.map((el) => {
            return {
              id: el.id,
              scheduledDate: el.scheduledDate,
              workoutDate: el.workoutDate,
            };
          }),
          workout: data.current.workout,
        },
      });
      // } else {
      //   dispatch({
      //     type: INIT_CALENDAR,
      //   });
      // }
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
          workout: data.workout,
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
  });
};
