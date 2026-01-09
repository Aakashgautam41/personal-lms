import { MARK_COURSE_COMPLETE_SUCCESS } from "../actions/progressActions";

const initialState = {
  items: [], // { userId, courseId, completed }
};

export default function progressReducer(state = initialState, action) {
  switch (action.type) {
    case MARK_COURSE_COMPLETE_SUCCESS:
      const updated = action.payload;

      const exists = state.items.find(
        (p) => p.courseId === updated.courseId && p.userId === updated.userId
      );

      if (!exists) {
        return { ...state, items: [...state.items, updated] };
      }

      return {
        ...state,
        items: state.items.map((p) => (p.id === updated.id ? updated : p)),
      };

    default:
      return state;
  }
}
