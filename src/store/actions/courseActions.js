export const ADD_COURSE = "ADD_COURSE";
export const FETCH_COURSES_REQUEST = "FETCH_COURSES_REQUEST";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";

export const addCourse = (course) => {
  return {
    type: ADD_COURSE,
    payload: course,
  };
};
