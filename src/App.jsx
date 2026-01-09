import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import CourseList from "./components/CourseList";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import "./index.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Auto redirect based on login status */}
        <Route
          path="/"
          element={
            <Navigate
              to={localStorage.getItem("authUser") ? "/courses" : "/login"}
            />
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
    </Layout>
  );
};

export default App;
