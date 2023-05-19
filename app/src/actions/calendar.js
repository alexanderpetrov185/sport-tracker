import $api from "../http";
import { INIT_CALENDAR } from "./types";

// Init
export const initCalendar = () => (dispatch) => {
  $api.get("/profile/workouts/calendar").then(({ data }) => {
    dispatch({
      type: INIT_CALENDAR,
      payload: {
        history: data.history.map((el) => el.scheduledDate.slice(0, 10)),
        currentDate: data.current.scheduledDate.slice(0, 10),
        upcomingDate: data.upcoming.map((el) => el.scheduledDate.slice(0, 10)),
        workout: data.current.workout,
      },
    });
  });
};

export const changeCalendar = () => (dispatch) => {};

// //transform data for current workout
// if (data.current.workout.customName) {
//   setCurrentWorkout((prevState) => ({
//     ...prevState,
//     customName: data.current.workout.customName,
//   }));
// }
// //transform data for current workout
// setCurrentWorkout((prevState) => ({
//   ...prevState,
//   workout: data.current.workout.complex.map((el) => {
//     let workout = { name: el.name, id: el.id };
//     if (el.complex) {
//       workout.complex = el.complex.map((el) => {
//         return {
//           nameComplex: el.name,
//           idComplex: el.id,
//         };
//       });
//     }
//     return workout;
//   }),
// }));
