import { combineReducers } from "redux";
import authReducer from "./authReducer";
import calendarReducer from "./calendarReducer";
import { useDispatch } from "react-redux";

export default combineReducers({
  authReducer,
  calendarReducer,
});
