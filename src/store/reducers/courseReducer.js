import { ADD_COURSE } from "../actions/courseActions"

// Initial state
const initialState = {
    courses: []
}

// Reducer (pure function)
export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COURSE:
            return {
                ...state,
                courses: [...state.courses, action.payload]
            }

        default:
            return state
    }
}
