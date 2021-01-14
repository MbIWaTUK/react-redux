import "./App.css";
import { Route } from "react-router-dom";
import React from "react";

import Navbar from "./Navbar";
import ProfileContainer from "./components/profile/ProfileContainerAPI";
import UsersListContainer from "./components/users/UsersListContainer";
import HeadedrContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer"

function App({ store, state, dispatch }) {
  return (
    <div>
      <HeadedrContainer />
      <Navbar />
      {/* <Route path="/dialogs" component={Dialogs} /> */}
      <Route
        path="/profile/:userId"
        render={() => (
          <ProfileContainer
          // store={store}
          // dispatch={dispatch}
          />
        )}
      />
      <Route path="/users" render={() => <UsersListContainer />} />
      <Route path="/login" render={() => <LoginContainer />} />
      <Route path="/dialogs" render={()=><DialogsContainer />} />
    </div>
  );
}

export default App;
