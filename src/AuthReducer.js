const SET_USER_DATA = "SET_USER_DATA";
const UNFOLLOW = "UNFOLLOW";

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

// export const setIsFetchingActionCreate = (isFetching) => ({
//   type: SET_IS_FETCHING,
//   isFetching
// })

export default authReducer;
