import { createSelector } from 'reselect';

export const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});
export const getCount = (state) => {
  return state.usersPage.count;
};
export const getTotalUsers = (state) => {
  return state.usersPage.totalUsers;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsLoading = (state) => {
  return state.usersPage.isLoading;
};
export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
