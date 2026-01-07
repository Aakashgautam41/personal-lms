import {
  ADD_COURSE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
} from "../actions/courseActions";

// Initial state
const initialState = {
  courses: [],
  loading: false,
};

// Reducer (pure function)
export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };

    default:
      return state;
  }
}
