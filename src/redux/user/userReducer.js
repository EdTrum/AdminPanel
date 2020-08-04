import * as actions from '../types'

const initialState = {
    authenticated: false,
    loading: false,
    user: {},
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SIGN_IN_REQUEST: return {
            ...state, loading: true
        }
        case actions.SIGN_IN_SUCCESS: return {
            loading: false,
            user: action.payload,
            authenticated: true,
            error: ''
        }
        case actions.SIGN_IN_ERROR: return {
            loading: false,
            user: {},
            error: action.payload
        }
        case actions.SIGN_OUT_SUCCESS: return initialState

        default: return state
    }
}

export default userReducer
