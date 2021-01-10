import React from "react";
import * as axios from "axios";
import userDefault from "./logo.svg";
import UsersListClassComponent from "./UserListClassComponent";
import Preloader from "./Preloader";
import { userAPI } from "./api/api";

const KEY = "b1186a4f-cbbb-4035-a7df-e7b360e29e9f";

class UsersListClassComponentAPI extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // if (this.props.users.length === 0) {
    //   this.props.setUsers(
    //     [
    //       { id: 1, followed: false, name: "Tom", status: "status", location: { country: " USA", city: "NY" } },
    //       { id: 2, followed: true, name: "jerry", status: "status", location: { country: " USA", city: "NY" } },
    //       { id: 3, followed: false, name: "Tom", status: "status", location: { country: " USA", city: "NY" } },
    //       { id: 4, followed: false, name: "jerry", status: "status", location: { country: " USA", city: "NY" } },
    //     ]
    //   )
    //   this.props.setTotalUserCount(50)
    // }

    this.props.setIsFetching(true);

    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((res) => {
        this.props.setUsers(res.items);
        this.props.setTotalUserCount(res.totalCount);
        this.props.setIsFetching(false);
      });

    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    //     {
    //       headers: {
    //         "API-KEY": KEY,
    //       },
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => {
    //     this.props.setUsers(res.data.items);
    //     this.props.setTotalUserCount(res.data.totalCount);
    //     this.props.setIsFetching(false);
    //   });
  }

  onChangeActivePage = (activePage) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(activePage);

    userAPI.getUsers(activePage, this.props.pageSize).then((res) => {
      this.props.setUsers(res.items);
      this.props.setIsFetching(false);
    });

    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${this.props.pageSize}`,
    //     {
    //       headers: {
    //         "API-KEY": "b1186a4f-cbbb-4035-a7df-e7b360e29e9f",
    //       },
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => {
    //     this.props.setUsers(res.data.items);
    //     this.props.setIsFetching(false);
    //   });
  };
  render() {
    return (
      <>
        {this.props.isFetching === true ? (
          <Preloader />
        ) : (
          <UsersListClassComponent
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            onChangeActivePage={this.onChangeActivePage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followButtonDisabled={this.props.followButtonDisabled}
            setFollowButtonDisabled={this.props.setFollowButtonDisabled}
          />
        )}
      </>
    );
  }
}

export default UsersListClassComponentAPI;
