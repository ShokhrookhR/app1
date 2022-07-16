const SET_LOGIN = 'SET_LOGIN';

let initialState = {
  email: null,
  password: null,
  rememberMe: false,
  captcha: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        ...action.data,
        captcha: 'gaga',
      };

    default:
      return state;
  }
};
export const setLoginAC = (email, password, rememberMe) => {
  return {
    type: SET_LOGIN,
    data: { email, password, rememberMe },
  };
};

export default loginReducer;
