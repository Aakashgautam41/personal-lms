import authReducer from "../authReducer";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../../actions/authActions";

describe("authReducer", () => {
  it("should handle LOGIN_SUCCESS", () => {
    const action = {
      type: LOGIN_SUCCESS,
      payload: { username: "alex" },
    };

    const state = authReducer(undefined, action);

    expect(state.isAuthenticated).toBe(true);
    expect(state.user.username).toBe("alex");
  });

  it("should handle LOGIN_FAIL", () => {
    const action = {
      type: LOGIN_FAIL,
      payload: "Invalid",
    };

    const state = authReducer(undefined, action);

    expect(state.isAuthenticated).toBe(false);
    expect(state.error).toBe("Invalid");
  });

  it("should handle LOGOUT", () => {
    const initialState = {
      isAuthenticated: true,
      user: { username: "alex" },
    };

    const state = authReducer(initialState, { type: LOGOUT });

    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBe(null);
  });
});
