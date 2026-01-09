import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/authActions";

let savedUser = null;

// load safely
try {
  const raw = localStorage.getItem("auth");
  if (raw) savedUser = JSON.parse(raw);
} catch (e) {
  savedUser = null;
}

const initialState = {
  user: savedUser || null,
  isAuthenticated: !!savedUser,
  loading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
      return { ...state, error: action.payload };

    case LOGIN_SUCCESS:
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };

    case LOGOUT:
      localStorage.removeItem("auth");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
