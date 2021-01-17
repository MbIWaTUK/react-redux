import Profile from "./Profile";
import React from "react";
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { connect } from "react-redux";
import {
  changeProfileInfo,
  handleAddPostActionCreate,
  handleChangeMessageActionCreate,
  getUserProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/profileReducer";
import { compose } from "redux";

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfileThunkCreator(userId);
    this.props.getStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost: handleAddPostActionCreate,
    setUserProfile: changeProfileInfo,
    getUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
  }),
  withRouter
  // WithAuthRedirect
)(ProfileContainerAPI);
