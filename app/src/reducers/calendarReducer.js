import {
  INIT_CALENDAR,
  CHANGE_CALENDAR,
  EMPTYDAY_CALENDAR,
  RELOAD_CALENDAR,
} from "../actions/types";

const initialState = {
  history: [],
  current: {},
  upcoming: [],
  workout: [],
  loading: true,
  selectedDate: {
    scheduledDate: new Date().toISOString(),
  },
  comment: null,
};

const calendarReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_CALENDAR:
      return payload.current // если текущая тренировка есть
        ? {
            ...state,
            history: payload.history,
            current: payload.current,
            comment: payload.current.comment,
            upcoming: payload.upcoming,
            workout: payload.current.workout,
            selectedDate: payload.current,
            loading: false,
          }
        : {
            ...state,
            history: payload.history,
            current: payload.current,
            upcoming: payload.upcoming,
            loading: false,
          };
    case RELOAD_CALENDAR:
      return {
        ...state,
        history: payload.history,
        current: payload.current,
        comment: payload.current.comment,
        upcoming: payload.upcoming,
        loading: false,
      };
    case CHANGE_CALENDAR:
      return {
        ...state,
        selectedDate: payload.selectedDate,
        comment: payload.comment,
        workout: payload.workout,
      };
    case EMPTYDAY_CALENDAR:
      return {
        ...state,
        workout: payload.workout,
      };
    default:
      return state;
  }
};

export default calendarReducer;
