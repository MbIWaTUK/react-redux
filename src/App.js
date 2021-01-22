import "./App.css";
import { Route } from "react-router-dom";
import React from "react";

import Navbar from "./Navbar";
import ProfileContainer from "./components/profile/ProfileContainerAPI";
import UsersListContainer from "./components/users/UsersListContainer";
import HeadedrContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import { authThunkCreator, logoutThunkCreator } from "./redux/AuthReducer";
import {initializeThunkCreator} from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./Preloader";
class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunkCreator();
  }
  render() {
    if(!this.props.initialized){
    return <Preloader />
    }
    return (
      <div>
        <HeadedrContainer />
        <Navbar />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersListContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  initialized:state.app.initialized
})
export default connect(mapStateToProps, {
  initializeThunkCreator,
})(App);

