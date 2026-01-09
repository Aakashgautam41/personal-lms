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

function* handleAddCourse(action) {
  try {
    const newCourse = action.payload;

    // fetch all courses
    const resp = yield fetch("http://localhost:4000/courses");
    const courses = yield resp.json();

    // check for duplicate titles
    const exists = courses.some(
      (c) => c.title.toLowerCase() === newCourse.title.toLowerCase()
    );

    if (exists) {
      alert("This course already exists!");
      return;
    }

    // create new course
    const addResp = yield fetch("http://localhost:4000/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    });

    const created = yield addResp.json();

    yield put({ type: ADD_COURSE_SUCCESS, payload: created });
  } catch (err) {
    yield put({ type: ADD_COURSE_FAIL, payload: "Could not add course" });
  }
}

export default function* courseSaga() {
  yield takeLatest(FETCH_COURSES_REQUEST, fetchCourses);
  yield takeLatest(ADD_COURSE_REQUEST, handleAddCourse);
}
