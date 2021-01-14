
import {
  handleAddPostActionCreate,
  handleChangeMessageActionCreate,
  changeProfileInfo,
  getUserProfileThunkCreator
} from '../../profileReducer';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import {AuthRedirectComponent} from "./ProfileContainerAPI"
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
    profilePage: state.profilePage,
  }
}

// let mapStateToPropsForRedirect = (state) => {
//   return {
//     isAuth:state.auth.isAuth
//   }
// }


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

let WithUrlContainerContainer = withRouter(AuthRedirectComponent)

const ProfileContainer = connect(mapStateToProps, {
  updateText: handleChangeMessageActionCreate,
  addPost: handleAddPostActionCreate,
  setUserProfile: changeProfileInfo,
  getUserProfileThunkCreator
})(WithUrlContainerContainer)

export default ProfileContainer
// export default ProfileContainer