import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginRequest,
  logout,
  registerRequest,
} from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user, error } = useSelector((state) => state.auth);

  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Redirect AFTER successful login
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/courses");
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    dispatch(loginRequest(username, password));
  };

  const handleRegister = () => {
    dispatch(registerRequest(username, password));
  };

  // If logged in, show welcome + logout
  if (isAuthenticated) {
    return (
      <div>
        <p>Welcome, {user?.username}!🎉</p>
        <button
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  // Otherwise show login/register form
  return (
    <div>
      <h2>{isRegister ? "Register" : "Login"}</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {!isRegister ? (
        <>
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setIsRegister(true)}
            >
              Register
            </span>
          </p>
        </>
      ) : (
        <>
          <button onClick={handleRegister}>Register</button>
          <p>
            Already have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setIsRegister(false)}
            >
              Login
            </span>
          </p>
        </>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
