import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersAC,
  setUsersAC,
  toggleFollowingProgressAC,
  toggleIsLoadingAC,
  unfollowAC,
} from '../State/usersReducer';
import Users from './Users';
import Preloader from './Preloader';
import { usersApi } from '../../api/api';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    usersApi.getUsers(this.props.currentPage, this.props.count).then((data) => {
      this.props.toggleIsLoading(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsers(data.totalCount / 100);
      console.log(data);
    });
  }
  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toggleIsLoading(true);

    usersApi.getUsers(currentPage, this.props.count).then((data) => {
      this.props.toggleIsLoading(false);

      this.props.setUsers(data.items);
      console.log(data);
    });
  };
  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}

        <Users {...this.props} setCurrentPage={this.setCurrentPage} />
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
  followingInProgress: state.usersPage.followingInProgress,
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
  togglefollowingProgress: toggleFollowingProgressAC,
})(UsersContainer);
