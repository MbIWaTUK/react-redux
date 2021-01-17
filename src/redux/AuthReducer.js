import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

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
      };

    default:
      return state;
  }
};

export const setUserDataActionCreate = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  user: {
    userId,
    login,
    email,
    isAuth,
  },
});

export const authThunkCreator = () => {
  return (dispatch) => {
    authAPI.me().then((res) => {
      if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data;
        dispatch(setUserDataActionCreate(id, login, email, true));
      }
    });
  };
};

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(authThunkCreator());
      } else {
        let message =
          res.data.messages.length > 0 ? res.data.messages[0] : "Some Error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};

export const logoutThunkCreator = () => {
  return (dispatch) => {
    authAPI.logout().then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setUserDataActionCreate(null, null, null, false));
      }
    });
  };
};

// export const setIsFetchingActionCreate = (isFetching) => ({
//   type: SET_IS_FETCHING,
//   isFetching
// })

export default authReducer;
