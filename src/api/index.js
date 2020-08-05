import axios from 'axios'
import {
    fetchCategoriesError, fetchCategoriesRequest, fetchCategoriesSuccess, addNewCategory, addNewCategoryError,
    addCategoryRequest
} from "../redux/category/categoryActions"
import {fetchCourseError, fetchCourseRequest, fetchCourseSuccess, addCourseRequest, addNewCourse, addNewCourseError} from '../redux/course/courseActions';
import {signInError, signInRequest, signInSuccess, signOut} from "../redux/user/userActions"
import {CLEAR_ERRORS} from "../redux/types"

export const signIn = (user, history) => {
    return async (dispatch) => {
        dispatch(signInRequest(true))
        try {
            const res = await axios.post('/signin', user)
            setAuthorizationHeader(res.data.token)
            dispatch(signInSuccess(res.data))
            history.push('/dashboard')
        } catch (e) {
            dispatch(signInError(e.message))
        }
    }
}

export const signOutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('edtrumA')
        delete axios.defaults.headers.common['Authorization']
        dispatch(signOut())
    }
}

export const getCategories = () => {
    return async (dispatch) => {
        dispatch(fetchCategoriesRequest(true))
        const res = await axios.get('/categories')
        try {
            dispatch(fetchCategoriesSuccess(res.data))
        } catch (e) {
            dispatch(fetchCategoriesError(res.data))
        }
    }
}

export const addCategory = category => {
    return (dispatch) => {
        dispatch(addCategoryRequest(true))
        axios.post('/categories', category).then(res => {
            dispatch(addNewCategory(res.data))
        }).catch(e => {
            if (e.response !== undefined){
                dispatch(addNewCategoryError(e.response.data))
            } else {
                console.log(e)
            }
        })
    }
}

export const clearErrors = () => {
    return dispatch => {
        dispatch({type: CLEAR_ERRORS})
    }
}

export const getCourses = () => {
    return async (dispatch) => {
        dispatch(fetchCourseRequest(true))
        const res = await axios.get('/courses')
        try {
            dispatch(fetchCourseSuccess(res.data))
        } catch (e) {
            dispatch(fetchCourseError(res.data))
        }
    }
}

export const addCourse = course => {
    return (dispatch) => {
        dispatch(addCourseRequest(true))
        axios.post('/courses', course).then(res => {
            dispatch(addNewCourse(res.data))
        }).catch(e => {
            if (e.response !== undefined){
                dispatch(addNewCourseError(e.response.data))
            } else {
                console.log(e)
            }
        })
    }
}

const setAuthorizationHeader = token => {
    const mToken = `Bearer ${token}`
    localStorage.setItem('edtrumA', mToken)
    axios.defaults.headers.common['Authorization'] = mToken
}
