import {
  createStore,
  combineReducers
} from "redux"
import profileReducer from "./profileReducer"
import usersReducer from "./UsersReducer"
import authReducer from "./AuthReducer"

let reducers = combineReducers({
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer
})

const store = createStore(reducers)

export default store