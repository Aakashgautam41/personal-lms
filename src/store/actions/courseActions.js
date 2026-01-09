// Fetch courses
export const FETCH_COURSES_REQUEST = "FETCH_COURSES_REQUEST";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";

export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST,
});

// Add course
export const ADD_COURSE_REQUEST = "ADD_COURSE_REQUEST";
export const ADD_COURSE_SUCCESS = "ADD_COURSE_SUCCESS";

export const addCourseRequest = (course) => ({
  type: ADD_COURSE_REQUEST,
  payload: course,
});
