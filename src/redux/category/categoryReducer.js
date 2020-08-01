import * as actions from '../types'

const initialState = {
    loading: false,
    categories: [],
    errors: {}
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_CATEGORIES_REQUEST:
            return {
                ...state, loading: true
            }
        case actions.FETCH_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: action.payload,
                errors: {}
            }
        case actions.FETCH_CATEGORIES_FAILURE:
            return {
                loading: false,
                categories: [],
                errors: action.payload
            }
        case actions.CLEAR_ERRORS:
            return {
                ...state, loading: false, errors: {}
            }
        case actions.ADD_CATEGORY_REQUEST:
            return {
                ...state, loading: true,
            }
        case actions.ADD_CATEGORY_SUCCESS:
            return {...state, categories: [...state.categories, action.payload], loading: false, errors: {}}
        case actions.ADD_CATEGORY_ERROR:
            return {
                ...state, errors: action.payload,
            }
        default:
            return state
    }
}

export default categoryReducer
