import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/authActions";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, error: null };

    case REGISTER_FAIL:
      return { ...state, error: action.payload };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };

    case LOGOUT:
      return { user: null, isAuthenticated: false, error: null };

    default:
      return state;
  }
}
