import { takeLatest, put, call } from "redux-saga/effects";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../actions/authActions";

// REGISTER SAGA
function* handleRegister(action) {
  const { username, password } = action.payload;

  try {
    // Get existing users
    const usersResp = yield call(fetch, "http://localhost:4000/users");
    const users = yield usersResp.json();

    const exists = users.find((u) => u.username === username);

    if (exists) {
      yield put({ type: REGISTER_FAIL, payload: "User already exists!" });
      return;
    }

    // Create new user
    const resp = yield call(fetch, "http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    // IMPORTANT: get newly created user object (with id)
    const newUser = yield resp.json();

    // SEND full user object to reducer as payload
    yield put({ type: REGISTER_SUCCESS, payload: newUser });
  } catch (err) {
    yield put({ type: REGISTER_FAIL, payload: "Server error" });
  }
}

// LOGIN SAGA
function* handleLogin(action) {
  const { username, password } = action.payload;

  try {
    const resp = yield call(fetch, "http://localhost:4000/users");
    const users = yield resp.json();

    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!found) {
      yield put({ type: LOGIN_FAIL, payload: "Invalid credentials" });
      return;
    }

    yield put({ type: LOGIN_SUCCESS, payload: found });
  } catch (err) {
    yield put({ type: LOGIN_FAIL, payload: "Server error" });
  }
}

export default function* authSaga() {
  yield takeLatest(REGISTER_REQUEST, handleRegister);
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}
