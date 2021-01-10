import Header from "./Header";
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserDataActionCreate } from "./AuthReducer";

const KEY = "b1186a4f-cbbb-4035-a7df-e7b360e29e9f";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        headers: {
          "API-KEY": KEY,
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          let { id, login, email } = res.data.data;
          this.props.auth(id, login, email);
        }
      });
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
})(HeaderContainer);
