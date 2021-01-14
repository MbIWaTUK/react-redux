import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.user,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setUserDataActionCreate = (userId, login, email) => ({
  type: SET_USER_DATA,
  user: {
    userId,
    login,
    email,
  },
});

export const authThunkCreator = ()=>{

  return  (dispatch) => {
    authAPI.me().then(res=>{
      if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data;
        dispatch(setUserDataActionCreate(id, login, email))
      }
    })
  }
}
// export const setIsFetchingActionCreate = (isFetching) => ({
//   type: SET_IS_FETCHING,
//   isFetching
// })

export default authReducer;
