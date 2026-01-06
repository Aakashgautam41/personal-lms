import { combineReducers } from "redux";
import courseReducer from "./reducers/courseReducer";

const rootReducer = combineReducers({
    courses: courseReducer
})

export default rootReducer