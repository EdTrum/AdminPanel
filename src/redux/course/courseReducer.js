import * as actions from '../types'

const initialState = {
  loading: false,
  courses: [],
  errors: {}
}

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_COURSE_REQUEST:
      return {
        ...state, loading: true
      }
    case actions.FETCH_COURSE_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
        errors: {}
      }
    case actions.CLEAR_ERRORS:
      return {
        ...state, loading: false, errors: {}
      }
    case actions.ADD_COURSE_REQUEST:
      return {
        ...state, loading: true,
      }
    case actions.ADD_COURSE_SUCCESS:
      return {...state, courses: [...state.courses, action.payload], loading: false, errors: {}}
    default:
      return state
  }
}

export default courseReducer
