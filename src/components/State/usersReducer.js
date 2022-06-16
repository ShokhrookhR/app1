import { usersApi } from '../../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_COUNT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  totalUsers: 100,
  count: 5,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SETUSERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsers: action.totalUsers,
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isLoading
          ? // ? [...state.followingInProgress, state.followingInProgress.push(action.userId)]
            [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SETUSERS,
    users,
  };
};
export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalUsers = (totalUsers) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsers,
  };
};
export const toggleIsLoading = (isLoading) => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading,
  };
};
export const toggleFollowingProgress = (isLoading, userId) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    isLoading,
    userId,
  };
};

export const getUsersThunkCreator = (currentPage, count) => (dispatch) => {
  dispatch(toggleIsLoading(true));
  usersApi.getUsers(currentPage, count).then((data) => {
    dispatch(toggleIsLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount / 100));
  });
};
export const followSuccessThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersApi.followUsers(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(follow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};
export const unfollowSuccessThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersApi.unfollowUsers(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export default usersReducer;
