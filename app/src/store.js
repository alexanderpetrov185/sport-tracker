import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const middleware = [thunk];

const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(...middleware)
);

export default store;
