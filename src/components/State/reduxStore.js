import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import dialogsReducer from './dialogsReducer';
import headerReducer from './headerReducer';
import navbarReducer from './navbarReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer,
  auth: headerReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;
