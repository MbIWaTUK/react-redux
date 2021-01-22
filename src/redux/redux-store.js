import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux"
import profileReducer from "./profileReducer"
import usersReducer from "./UsersReducer"
import authReducer from "./AuthReducer"
import thinkMiddleWare from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"

let reducers = combineReducers({
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thinkMiddleWare))

export default store