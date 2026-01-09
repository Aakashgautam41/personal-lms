import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourseRequest } from "../store/actions/courseActions";
import { markCourseCompleteRequest } from "../store/actions/progressActions";
import { fetchCoursesRequest } from "../store/actions/courseActions";

const CourseList = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { courses } = useSelector((state) => state.courses);
  const progress = useSelector((state) => state.progress.items);

  const [title, setTitle] = useState("");
  const [lessons, setLessons] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCoursesRequest());
    }
  }, [isAuthenticated]);

  const getCourseProgress = (courseId) => {
    const p = progress.find((p) => p.courseId === courseId);
    return p ? p.completedLessons : 0;
  };

  const handleProgress = (courseId, lessons) => {
    const completed = getCourseProgress(courseId) + 1;

    if (completed <= lessons) {
      dispatch(updateProgressRequest(user.id, courseId, completed));
    }
  };

  const handleAddCourse = () => {
    if (!title || !lessons) return alert("Fill all fields");

    const newCourse = {
      title,
      lessons: Number(lessons),
    };

    dispatch(addCourseRequest(newCourse));

    setTitle("");
    setLessons("");
  };

  if (!isAuthenticated) {
    return <p>Please log in to view courses.</p>;
  }

  return (
    <div>
      <h2>Your Courses</h2>

      {/* Add Course Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Number of Lessons"
          value={lessons}
          onChange={(e) => setLessons(e.target.value)}
        />

        <button onClick={handleAddCourse}>Add Course</button>
      </div>

      {/* Show Courses */}
      {courses.map((c) => (
        <div key={c.id} style={{ border: "1px solid gray", padding: "10px" }}>
          <h3>{c.title}</h3>
          <p>Lessons: {c.lessons}</p>

          <button
            onClick={() => dispatch(markCourseCompleteRequest(user.id, c.id))}
            disabled={progress.some((p) => p.courseId === c.id && p.completed)}
          >
            {progress.some((p) => p.courseId === c.id && p.completed)
              ? "Completed ✔"
              : "Mark Course Complete"}
          </button>
          <p>
            Status:{" "}
            {progress.some((p) => p.courseId === c.id && p.completed)
              ? "Completed"
              : "Not Completed"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
