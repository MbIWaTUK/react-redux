import React from "react";
import {
  handleAddPostActionCreate,
  handleChangeMessageActionCreate,
  changeProfileInfo
} from './profileReducer';
import Profile from "./Profile";
import StoreContext from "./storeContext";
import { connect } from "react-redux";
import ProfileContainerAPI from "./ProfileContainerAPI";
import { withRouter } from "react-router-dom"

// const ProfileContainer = ({ text, store, dispatch }) => {

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState()

//         let handleAddPost = () => {

//           let action = handleAddPostActionCreate()
//           store.dispatch(action)
//         }

//         let handleChangeMessage = (value) => {

//           let action = handleChangeMessageActionCreate(value)
//           store.dispatch(action)
//         }
//         return <Profile state={state.profilePage} updateText={handleChangeMessage} addPost={handleAddPost} />
//       }}
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateText: (value) => {
//       dispatch(handleChangeMessageActionCreate(value))
//     },
//     addPost: () => {
//       dispatch(handleAddPostActionCreate())
//     },
//     setUserProfile: (user) => {
//       dispatch(changeProfileInfo(user))
//     }
//   }
// }


// обертка для работы с роутом

let WithUrlContainerContainer = withRouter(ProfileContainerAPI)

const ProfileContainer = connect(mapStateToProps, {
  updateText: handleChangeMessageActionCreate,
  addPost: handleAddPostActionCreate,
  setUserProfile: changeProfileInfo
})(WithUrlContainerContainer)

export default ProfileContainer
// export default ProfileContainer