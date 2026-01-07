import { delay, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
} from "../actions/courseActions";

function* fetchCourses() {
  yield delay(1000);
  const fakeCourses = [
    { id: 1, title: "React Basics", lessons: 5 },
    { id: 2, title: "Redux Fundamentals", lessons: 7 },
  ];

  yield put({
    type: FETCH_COURSES_SUCCESS,
    payload: fakeCourses,
  });
}

export default function* courseSaga() {
  yield takeLatest(FETCH_COURSES_REQUEST, fetchCourses);
}
