
import {
  handleAddPostActionCreate,
  handleChangeMessageActionCreate,
  changeProfileInfo,
  getUserProfileThunkCreator
} from '../../profileReducer';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import {AuthRedirectComponent} from "./ProfileContainerAPI"

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}

// обертка для работы с роутом

let WithUrlContainerContainer = withRouter(AuthRedirectComponent)

const ProfileContainer = connect(mapStateToProps, {
  updateText: handleChangeMessageActionCreate,
  addPost: handleAddPostActionCreate,
  setUserProfile: changeProfileInfo,
  getUserProfileThunkCreator
})(WithUrlContainerContainer)

export default ProfileContainer
// export default ProfileContainer