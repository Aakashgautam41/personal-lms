import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
} from "../actions/courseActions";

// Fetch courses (GET)
function* fetchCourses() {
  const response = yield fetch("http://localhost:4000/courses");
  const data = yield response.json();

  yield put({
    type: FETCH_COURSES_SUCCESS,
    payload: data,
  });
}

// Add new course (POST)
function* addCourseSaga(action) {
  const response = yield fetch("http://localhost:4000/courses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(action.payload),
  });

  const createdCourse = yield response.json();

  yield put({
    type: ADD_COURSE_SUCCESS,
    payload: createdCourse,
  });
}

export default function* courseSaga() {
  yield takeLatest(FETCH_COURSES_REQUEST, fetchCourses);
  yield takeLatest(ADD_COURSE_REQUEST, addCourseSaga);
}
