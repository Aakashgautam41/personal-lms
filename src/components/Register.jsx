import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../store/actions/authActions";

const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    dispatch(registerRequest(username, password));
  };

  return (
    <div>
      <h2>Register</h2>

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

      <button onClick={handleRegister}>Register</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
