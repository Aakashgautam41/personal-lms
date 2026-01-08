import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import CourseList from "./components/CourseList";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
      }}
    >
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} mode
      </button>

      <h1>📚 Personal LMS</h1>
      <CourseList />
    </div>
  );
}

export default App;
