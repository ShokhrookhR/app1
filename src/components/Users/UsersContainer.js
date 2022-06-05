import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../State/usersReducer';
import Users from './Users';

let f1 = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};
const UsersContainer = connect(f1, f2)(Users);
export default UsersContainer;
