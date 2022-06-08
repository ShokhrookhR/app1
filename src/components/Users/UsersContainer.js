import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC } from '../State/usersReducer';
import Users from './Users';

let f1 = (state) => {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
  };
};

let f2 = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
  };
};
const UsersContainer = connect(f1, f2)(Users);
export default UsersContainer;
