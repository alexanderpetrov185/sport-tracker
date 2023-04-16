import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import authReducer from "./Reducers";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  // Reducers
  authReducer,
});

export const Store = configureStore(
  { reducer: RootReducer },
  applyMiddleware(thunk)
);
