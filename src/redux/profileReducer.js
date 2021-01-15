import { profileAPI, userAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const CHANGE_MESSAGE = "CHANGE-MESSAGE"
const CHANGE_PROFILE_INFO = "CHANGE-PROFILE-INFO"
const SET_STATUS = "SET-STATUS"

let initialState = {
  user: null,
  posts: [
    { id: 1, message: "qwerty", likeCount: 10 },
    { id: 2, message: "sssss", likeCount: 5 }
  ],
  status:""
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let newPosts = { id: state.posts.length + 1, message: action.message, likeCount: 0 }
      return {
        ...state,
        posts: [...state.posts, newPosts],
      }
    }

    case CHANGE_PROFILE_INFO: {
      return {
        ...state,
        user: action.user
      }
    }

    case SET_STATUS:{
      return{
        ...state,
        status: action.status
      }
    }

    default:
      return state
  }


}

export const handleAddPostActionCreate = (message) => ({ type: ADD_POST, message })

export const changeProfileInfo = (user) => ({ type: CHANGE_PROFILE_INFO, user })
export const setStatus = (status) => ({ type: SET_STATUS, status })


export const getUserProfileThunkCreator = (userId)=>{

  return (dispatch) => {
  userAPI.userProfile(userId).then(res => {
    dispatch(changeProfileInfo(res.data))
  })
}
}

export const getStatusThunkCreator = (userId)=>{

  return (dispatch) => {
  profileAPI.getStatus(userId).then(res => {
    dispatch(setStatus(res.data))
  })
}
}

export const updateStatusThunkCreator = (status)=>{

  return (dispatch) => {
  profileAPI.updateStatus(status).then(res => {
    if(res.data.resultCode===0){
      dispatch(setStatus(status))
    }
  })
}
}

export default profileReducer