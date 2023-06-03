import { combineReducers } from "redux";
import authReducer from "./authReducer";
import calendarReducer from "./calendarReducer";
import { LOGOUT } from "../actions/types";

const rootReducer = combineReducers({
  authReducer,
  calendarReducer,
});

// поподробнее тут https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
export default (state, action) =>
  rootReducer(action.type === LOGOUT ? undefined : state, action);
