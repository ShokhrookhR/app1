import { stopSubmit } from 'redux-form';
import { authApi } from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        // isAuth: true,
      };

    default:
      return state;
  }
};
export const setUserData = (userId, login, email, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: { userId, login, email, isAuth },
  };
};
export const getAuthUSerDataTC = () => (dispatch) => {
  authApi.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setUserData(id, login, email, true));
    }
  });
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authApi.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthUSerDataTC());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : 'Some Error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};
export const logout = () => async (dispatch) => {
  let data = await authApi.logout();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};
export default authReducer;
