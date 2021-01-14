import { userAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const CHANGE_MESSAGE = "CHANGE-MESSAGE"
const CHANGE_PROFILE_INFO = "CHANGE-PROFILE-INFO"

let initialState = {
  user: null,
  posts: [
    { id: 1, message: "qwerty", likeCount: 10 },
    { id: 2, message: "sssss", likeCount: 5 }
  ],
  newPostText: ""
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let newPosts = { id: state.posts.length + 1, message: state.newPostText, likeCount: 0 }
      return {
        ...state,
        posts: [...state.posts, newPosts],
        newPostText: ""
      }
    }

    case CHANGE_MESSAGE: {
      return {
        ...state,
        newPostText: action.msg
      }
    }

    case CHANGE_PROFILE_INFO: {
      return {
        ...state,
        user: action.user
      }
    }

    default:
      return state
  }


}

export const handleAddPostActionCreate = () => ({ type: ADD_POST })
export const handleChangeMessageActionCreate = (msg) => {
  return { type: CHANGE_MESSAGE, msg }
}
export const changeProfileInfo = (user) => ({ type: CHANGE_PROFILE_INFO, user })

export const getUserProfileThunkCreator = (userId)=>{

  return (dispatch) => {
  userAPI.userProfile(userId).then(res => {
    dispatch(changeProfileInfo(res.data))
  })
}
}

export default profileReducer