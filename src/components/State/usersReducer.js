const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_COUNT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialization = {
  users: [],
  totalUsers: 100,
  count: 5,
  currentPage: 1,
  isLoading: false,
};

const usersReducer = (state = initialization, action) => {
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

    default:
      return state;
  }
};
export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsersAC = (users) => {
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
export const setTotalUsersAC = (totalUsers) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsers,
  };
};
export const toggleIsLoadingAC = (isLoading) => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading,
  };
};
export default usersReducer;
