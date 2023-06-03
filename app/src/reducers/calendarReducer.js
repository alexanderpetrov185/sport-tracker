import {
  INIT_CALENDAR,
  CHANGE_CALENDAR,
  EMPTYDAY_CALENDAR,
  LOGOUT,
} from "../actions/types";

const initialState = {
  history: [],
  currentDate: [],
  upcomingDates: [],
  workout: "",
  loading: true,
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
        loading: false,
      };
    case CHANGE_CALENDAR:
      return {
        ...state,
        workout: payload.workout,
      };
    case EMPTYDAY_CALENDAR:
      return {
        ...state,
        workout: "",
      };
    default:
      return state;
  }
};

export default calendarReducer;
