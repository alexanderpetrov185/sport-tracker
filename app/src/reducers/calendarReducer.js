import { INIT_CALENDAR, CHANGE_CALENDAR } from "../actions/types";

const initialState = {
  history: "",
  currentDate: "",
  upcomingDates: "",
  workout: "",
};

const calendarReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_CALENDAR:
      return {
        ...state,
        history: payload.history,
        currentDate: payload.currentDate,
        upcomingDates: payload.upcomingDates,
        workout: payload.workout,
      };
    case CHANGE_CALENDAR:
      return {
        ...state,
        workout: payload.workout,
      };
    default:
      return state;
  }
};

export default calendarReducer;
