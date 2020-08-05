import * as actions from '../types';

export const fetchCourseRequest = bool => {
  return {
    type: actions.FETCH_COURSE_REQUEST,
    payload: bool
  }
}

export const fetchCourseSuccess = courses => {
  return {
    type: actions.FETCH_COURSE_SUCCESS,
    payload: courses
  }
}

export const fetchCourseError = error => {
  return {
    type: actions.FETCH_COURSE_FAILURE,
    payload: error
  }
}

export const addCourseRequest = bool => {
  return {
    type: actions.ADD_COURSE_REQUEST,
    payload: bool
  }
}

export const addNewCourse = course => {
  return {
    type: actions.ADD_COURSE_SUCCESS,
    payload: course
  }
}

export const addNewCourseError = error => {
  return{
    type: actions.ADD_COURSE_ERROR,
    payload: error
  }
}