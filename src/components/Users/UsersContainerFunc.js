import React from 'react';
import { connect } from 'react-redux';
import {
  followSuccessThunkCreator,
  unfollowSuccessThunkCreator,
  getUsersThunkCreator,
  setCurrentPageAC,
} from '../State/usersReducer';
import Users from './Users';
import {
  getCount,
  getCurrentPage,
  getFollowingInProgress,
  getIsLoading,
  getTotalUsers,
  getUsersSuperSelector,
} from '../State/usersSelectors';

const UsersContainer = (props) => {
  React.useEffect(() => {
    props.getUsers(props.currentPage, props.count);
  }, []);

  const setCurrentPage = (currentPage) => {
    props.setCurrentPage(currentPage);
    props.getUsers(currentPage, props.count);
  };

  return (
    <>
      <Users {...props} setCurrentPage={setCurrentPage} />
    </>
  );
};

let f1 = (state) => ({
  users: getUsersSuperSelector(state),
  count: getCount(state),
  totalUsers: getTotalUsers(state),
  currentPage: getCurrentPage(state),
  isLoading: getIsLoading(state),
  followingInProgress: getFollowingInProgress(state),
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
