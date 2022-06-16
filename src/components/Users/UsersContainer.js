import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  followSuccessThunkCreator,
  unfollowSuccessThunkCreator,
  getUsersThunkCreator,
  setCurrentPageAC,
} from '../State/usersReducer';
import Users from './Users';
import Preloader from './Preloader';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.count);
  }
  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsers(currentPage, this.props.count);
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
  setCurrentPage: setCurrentPageAC,

  getUsers: getUsersThunkCreator,
  followSuccess: followSuccessThunkCreator,
  unfollowSuccess: unfollowSuccessThunkCreator,
})(UsersContainer);
