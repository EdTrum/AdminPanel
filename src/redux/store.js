import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension/index"
import thunk from 'redux-thunk'
import categoryReducer from "./category/categoryReducer"
import userReducer from "./user/userReducer"

const initialState = {}
const middleware = [thunk]

const rootReducer = combineReducers({
    userData: userReducer,
    categoryData: categoryReducer
})

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
