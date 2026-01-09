import { call, put, takeLatest } from "redux-saga/effects";
import {
  MARK_COURSE_COMPLETE_REQUEST,
  MARK_COURSE_COMPLETE_SUCCESS,
} from "../actions/progressActions";

function* markCourseComplete(action) {
  const { userId, courseId } = action.payload;

  const resp = yield call(
    fetch,
    `http://localhost:4000/progress?userId=${userId}&courseId=${courseId}`
  );
  const data = yield resp.json();

  let result;

  if (data.length === 0) {
    // create
    const res = yield call(fetch, `http://localhost:4000/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        courseId,
        completed: true,
      }),
    });

    result = yield res.json();
  } else {
    // update existing
    const item = data[0];

    const res = yield call(fetch, `http://localhost:4000/progress/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...item, completed: true }),
    });

    result = yield res.json();
  }

  yield put({ type: MARK_COURSE_COMPLETE_SUCCESS, payload: result });
}

export default function* progressSaga() {
  yield takeLatest(MARK_COURSE_COMPLETE_REQUEST, markCourseComplete);
}
