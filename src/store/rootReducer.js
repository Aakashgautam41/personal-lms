import { combineReducers } from "redux";
import courseReducer from "./reducers/courseReducer";
import authReducer from "./reducers/authReducer";
import progressReducer from "./reducers/progressReducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  auth: authReducer,
  progress: progressReducer,
});

export default rootReducer;
