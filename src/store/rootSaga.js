import { all } from "redux-saga/effects";
import courseSaga from "./sagas/courseSaga";
import authSaga from "./sagas/authSaga";
import progressSaga from "./sagas/progressSaga";

export default function* rootSaga() {
  yield all([courseSaga(), authSaga(), progressSaga()]);
}
