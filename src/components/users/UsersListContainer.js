import { connect } from "react-redux";
import {
  handleFollowActionCreate,
  handleUnFollowActionCreate,
  setCurrentPageActionCreate,
  setFollowButtonDisabledActionCreate,
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
} from "../../redux/UsersReducer";
import { getCurrentPage, getFollowButtonDisabled, getIsFetching, getPageSize, getTotalUserCount, getUsers, getUsersSelector } from "../../redux/UsersSelectors";
import UsersListClassComponentAPI from "./UserListClassComponentAPI";

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followButtonDisabled: getFollowButtonDisabled(state),
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(handleFollowActionCreate(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(handleUnFollowActionCreate(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreate(users))
//     },
//     setCurrentPage: (activePage) => {
//       dispatch(setCurrentPageActionCreate(activePage))
//     },
//     setTotalUserCount: (setTotalUserCount) => {
//       dispatch(setTotalUserCountActionCreate(setTotalUserCount))
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingActionCreate(isFetching))
//     }
//   }
// }

const UsersListContainer = connect(mapStateToProps, {
  follow: handleFollowActionCreate,
  unfollow: handleUnFollowActionCreate,
  setCurrentPage: setCurrentPageActionCreate,
  setFollowButtonDisabled: setFollowButtonDisabledActionCreate,
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
})(UsersListClassComponentAPI);

export default UsersListContainer;
