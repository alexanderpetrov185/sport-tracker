import { configureStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./index";

// const middleware = [thunk];

// const store = configureStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
