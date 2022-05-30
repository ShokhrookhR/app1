import React from 'react';
import { connect } from 'react-redux';

import FriendItem from './FriendItem/FriendItem';
import Friends from './Friends';
import s from './Friends.module.css';

let f1 = (state) => {
  return {
    friends: state.navbarPage.friends,
  };
};
const FriendsContainer = connect(f1)(Friends);

export default FriendsContainer;
