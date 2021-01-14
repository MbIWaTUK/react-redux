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
import UsersListClassComponentAPI from "./UserListClassComponentAPI";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followButtonDisabled: state.usersPage.followButtonDisabled,
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
  // setUsers: setUsersActionCreate,
  setCurrentPage: setCurrentPageActionCreate,
  // setTotalUserCount: setTotalUserCountActionCreate,
  // setIsFetching: setIsFetchingActionCreate,
  setFollowButtonDisabled: setFollowButtonDisabledActionCreate,
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
})(UsersListClassComponentAPI);

export default UsersListContainer;
