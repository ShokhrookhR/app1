import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  login: loginReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
window.store = store;
export default store;
