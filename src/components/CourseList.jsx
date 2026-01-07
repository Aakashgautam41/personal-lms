import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_COURSES_REQUEST,
  addCourse,
} from "../store/actions/courseActions";
import CourseCard from "./CourseCard";
import { useEffect } from "react";

const CourseList = () => {
  const dispatch = useDispatch();

  const { courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch({ type: FETCH_COURSES_REQUEST });
  }, [dispatch]);

  return (
    <div>
      <h2>Available Courses</h2>

      {loading && <p>Loading courses...</p>}

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
