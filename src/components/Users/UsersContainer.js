import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersAC,
  setUsersAC,
  toggleIsLoadingAC,
  unfollowAC,
} from '../State/usersReducer';
import axios from 'axios';
import Users from './Users';
import Preloader from './Preloader';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`,
      )
      .then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount / 100);
        console.log(response.data);
      });
  }
  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toggleIsLoading(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.count}`,
      )
      .then((response) => {
        this.props.toggleIsLoading(false);

        this.props.setUsers(response.data.items);
        console.log(response.data);
      });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalUsers / this.props.count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}

        <Users
          totalUsers={this.props.totalUsers}
          count={this.props.count}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          setCurrentPage={this.setCurrentPage}
        />
      </>
    );
  }
}

let f1 = (state) => ({
  users: state.usersPage.users,
  count: state.usersPage.count,
  totalUsers: state.usersPage.totalUsers,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
});

// let f2 = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalUsers: (totalUsers) => {
//       dispatch(setTotalUsersAC(totalUsers));
//     },
//     toggleIsLoading: (isLoading) => {
//       dispatch(toggleIsLoadingAC(isLoading));
//     },
//   };
// };

export default connect(f1, {
  follow: followAC,

  unfollow: unfollowAC,

  setUsers: setUsersAC,

  setCurrentPage: setCurrentPageAC,
  setTotalUsers: setTotalUsersAC,

  toggleIsLoading: toggleIsLoadingAC,
})(UsersContainer);
