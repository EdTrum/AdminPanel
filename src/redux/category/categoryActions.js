import * as actions from "../types"

export const fetchCategoriesRequest = bool => {
    return {
        type: actions.FETCH_CATEGORIES_REQUEST,
        payload: bool
    }
}

export const fetchCategoriesSuccess = categories => {
    return {
        type: actions.FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export const fetchCategoriesError = error => {
    return {
        type: actions.FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}

export const addCategoryRequest = bool => {
    return {
        type: actions.ADD_CATEGORY_REQUEST,
        payload: bool
    }
}

export const addNewCategory = category => {
    return {
        type: actions.ADD_CATEGORY_SUCCESS,
        payload: category
    }
}

export const addNewCategoryError = error => {
    return{
        type: actions.ADD_CATEGORY_ERROR,
        payload: error
    }
}
