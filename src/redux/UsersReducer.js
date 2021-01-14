import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const FOLLOW_BUTTON_DISABLED = "FOLLOW_BUTTON_DISABLED";

let initialState = {
  users: [],
  pageSize: 3,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followButtonDisabled: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.activePage };

    case SET_TOTAL_USER_COUNT:
      return { ...state, totalUserCount: action.totalCount };

    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case FOLLOW_BUTTON_DISABLED:
      return {
        ...state,
        followButtonDisabled: action.isFetching
          ? [...state.followButtonDisabled, action.userId]
          : [...state.followButtonDisabled.filter((f) => f !== action.userId)],
      };

    default:
      return state;
  }
};

export const handleFollowActionCreate = (userId) => ({ type: FOLLOW, userId });
export const handleUnFollowActionCreate = (userId) => ({
  type: UNFOLLOW,
  userId,
});
//добавление юзеров с сервера
export const setUsersActionCreate = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreate = (activePage) => ({
  type: SET_CURRENT_PAGE,
  activePage,
});
export const setTotalUserCountActionCreate = (setTotalUserCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalCount: setTotalUserCount,
});
export const setIsFetchingActionCreate = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});
export const setFollowButtonDisabledActionCreate = (isFetching, userId) => ({
  type: FOLLOW_BUTTON_DISABLED,
  isFetching,
  userId,
});
// export const handleChangeMessageActionCreate = (msg) => {
//   return { type: CHANGE_MESSAGE, msg }
// }

export const getUsersThunkCreator=(currentPage,pageSize)=>{
  return (dispatch) => {
    dispatch(setIsFetchingActionCreate(true))

      userAPI
        .getUsers(currentPage, pageSize)
        .then((res) => {
          dispatch(setUsersActionCreate(res.items))
          dispatch(setTotalUserCountActionCreate(res.totalCount))
          dispatch(setIsFetchingActionCreate(false))
        });
  }
}


export const followThunkCreator=(id)=>{
  return (dispatch) => {
    dispatch(setFollowButtonDisabledActionCreate(true, id))

    userAPI.follow(id).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(handleFollowActionCreate(id))
      }
      dispatch(setFollowButtonDisabledActionCreate(false, id))
    });
  }
}

export const unFollowThunkCreator=(id)=>{
  return (dispatch) => {
    dispatch(setFollowButtonDisabledActionCreate(true, id))

    userAPI.unfollow(id).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(handleUnFollowActionCreate(id))
      }
      dispatch(setFollowButtonDisabledActionCreate(false, id))
    });
  }
}
export default usersReducer;
