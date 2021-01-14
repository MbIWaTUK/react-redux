import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux"
import profileReducer from "./profileReducer"
import usersReducer from "./UsersReducer"
import authReducer from "./AuthReducer"
import thinkMiddleWare from "redux-thunk"
let reducers = combineReducers({
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thinkMiddleWare))

export default store