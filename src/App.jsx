import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import CourseList from "./components/CourseList";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/actions/authActions";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      {/* Theme + Header stays visible */}
      <h1>📚 Personal LMS</h1>
      {isAuthenticated && (
        <div style={{ marginBottom: "20px" }}>
          <p>Welcome, {user?.username}! 🎉</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      <Routes>
        {/* Default route → redirect based on login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/courses" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <CourseList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
