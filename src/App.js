import "./App.css";
import { Route } from "react-router-dom";
import React from "react";
import Profile from "./Profile";
import Dialogs from "./Dialogs";
import Navbar from "./Navbar";
import ProfileContainer from "./ProfileContainer";
import UsersList from "./UsersList";
import UsersListContainer from "./UsersListContainer";
import HeadedrContainer from "./HeaderContainer";

function App({ store, state, dispatch }) {
  return (
    <div>
      <HeadedrContainer />
      <Navbar />
      <Route path="/dialogs" component={Dialogs} />
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
    </div>
  );
}

export default App;
