import { authApi } from '../../api/api';

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
export const sendLoginForm = (email, password, rememberMe) => (dispatch) => {
  authApi.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setLoginAC(email, password, rememberMe));
    }
  });
};
export default loginReducer;
