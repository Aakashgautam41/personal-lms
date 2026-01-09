import { expectSaga } from "redux-saga-test-plan";
import authSaga from "../authSaga";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actions/authActions";

const mockUsers = [{ username: "alex", password: "123" }];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockUsers),
  })
);

describe("authSaga", () => {
  it("should login correctly", () => {
    return expectSaga(authSaga)
      .dispatch({
        type: LOGIN_REQUEST,
        payload: { username: "alex", password: "123" },
      })
      .put({ type: LOGIN_SUCCESS, payload: mockUsers[0] })
      .silentRun();
  });
});
