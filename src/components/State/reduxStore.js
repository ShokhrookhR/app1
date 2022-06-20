import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import dialogsReducer from './dialogsReducer';
import headerReducer from './headerReducer';
import navbarReducer from './navbarReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer,
  auth: headerReducer,
  form: formReducer,
  login: loginReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;
