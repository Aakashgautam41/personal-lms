export const MARK_COURSE_COMPLETE_REQUEST = "MARK_COURSE_COMPLETE_REQUEST";
export const MARK_COURSE_COMPLETE_SUCCESS = "MARK_COURSE_COMPLETE_SUCCESS";

export const markCourseCompleteRequest = (userId, courseId) => ({
  type: MARK_COURSE_COMPLETE_REQUEST,
  payload: { userId, courseId },
});
