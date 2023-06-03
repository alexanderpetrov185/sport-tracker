import {
  INIT_CALENDAR,
  CHANGE_CALENDAR,
  EMPTYDAY_CALENDAR,
} from "../actions/types";

const initialState = {
  history: [],
  current: {},
  upcoming: [],
  workout: [],
  loading: true,
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
            upcoming: payload.upcoming,
            workout: payload.current.workout,
            loading: false,
          }
        : {
            ...state,
            history: payload.history,
            current: payload.current,
            upcoming: payload.upcoming,
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
        workout: payload.workout,
      };
    default:
      return state;
  }
};

export default calendarReducer;
