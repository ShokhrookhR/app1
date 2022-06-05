const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS';

let initialization = {
  users: [
    // {
    //   id: 1,
    //   name: 'Sancho',
    //   status: 'I Love MU',
    //   followed: true,
    //   photoURL: '',
    //   location: { country: 'Uzbekistan', city: 'Tashkent' },
    // },
    // {
    //   id: 2,
    //   name: 'Fernandes',
    //   status: 'I Love MU',
    //   followed: true,
    //   photoURL: '',
    //   location: { country: 'Uzbekistan', city: 'Tashkent' },
    // },
    // {
    //   id: 3,
    //   name: 'Ronaldo',
    //   status: 'I Love MU',
    //   followed: false,
    //   photoURL: '',
    //   location: { country: 'Uzbekistan', city: 'Termez' },
    // },
  ],
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
        users: [...state.users, ...action.users],
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
export default usersReducer;
