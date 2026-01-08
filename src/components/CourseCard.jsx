import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CourseCard = ({ course }) => {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    border: theme === "light" ? "1px solid #ccc" : "1px solid #555",
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
  };
  console.log("THEME INSIDE CARD:", theme);
  return (
    <div style={cardStyle}>
      <h3>{course.title}</h3>
      <p>Lessons: {course.lessons}</p>
      <button>Start Learning</button>
    </div>
  );
};

export default CourseCard;
