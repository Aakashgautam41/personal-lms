import { all } from "redux-saga/effects";
import courseSaga from "./sagas/courseSaga";

export default function* rootSaga() {
  yield all([courseSaga()]);
}
