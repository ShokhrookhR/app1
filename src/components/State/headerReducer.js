const SET_USER_DATA = 'SET_USER_DATA';

let initialization = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const headerReducer = (state = initialization, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};
export const setUserDataAC = (userId, login, email) => {
  return {
    type: SET_USER_DATA,
    data: { userId, login, email },
  };
};

export default headerReducer;
