import $api from "../http";
import { INIT_CALENDAR } from "./types";

// Init
export const initCalendar = (dispatch) => {
  $api
    .get("/profile/workouts/calendar")
    .then(({ data }) => {
      dispatch({
        type: INIT_CALENDAR,
        payload: data,
      });
    })
    .catch((error) => {
      alert(error);
    });
};

// setDateList({
//     currentDate: data.current.scheduledDate.slice(0, 10),
//     upcomingDate: data.upcoming.map((el) => el.scheduledDate.slice(0, 10)),
//   });
