import Profile from "./Profile";
import React from "react"
import { withRouter } from "react-router-dom"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { connect } from "react-redux";
import { changeProfileInfo, handleAddPostActionCreate, handleChangeMessageActionCreate, getUserProfileThunkCreator } from "../../redux/profileReducer";
import { compose } from "redux";

class ProfileContainerAPI extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfileThunkCreator(userId)
  }
  render() {
    
    return (
      <Profile {...this.props} />
    )
  }
}


// let AuthRedirectComponent = WithAuthRedirect(ProfileContainerAPI)


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}
// let WithUrlContainerContainerComponent = withRouter(AuthRedirectComponent)

// const ProfileContainer = connect(mapStateToProps, {
//   updateText: handleChangeMessageActionCreate,
//   addPost: handleAddPostActionCreate,
//   setUserProfile: changeProfileInfo,
//   getUserProfileThunkCreator
// })(WithUrlContainerContainerComponent)


export default compose(
  connect(mapStateToProps, {
    updateText: handleChangeMessageActionCreate,
    addPost: handleAddPostActionCreate,
    setUserProfile: changeProfileInfo,
    getUserProfileThunkCreator
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainerAPI)