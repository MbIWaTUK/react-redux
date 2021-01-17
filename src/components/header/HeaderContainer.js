import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import {
  setUserDataActionCreate,
  authThunkCreator,
  logoutThunkCreator,
} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authThunkCreator();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, {
  auth: setUserDataActionCreate,
  authThunkCreator,
  logout: logoutThunkCreator,
})(HeaderContainer);
