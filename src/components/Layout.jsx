import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <h1>📚 Personal LMS</h1>

      {isAuthenticated && (
        <div style={{ marginBottom: "20px" }}>
          <p>Welcome, {user?.username}! 🎉</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {children}
    </div>
  );
};

export default Layout;
