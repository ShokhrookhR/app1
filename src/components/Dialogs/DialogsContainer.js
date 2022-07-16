import { connect } from 'react-redux';
import { compose } from 'redux';
import withRedirect from '../Redirect/withRedirect';

import { addMessageActionCreator } from '../State/dialogsReducer';

import Dialogs from './Dialogs';

let f1 = (state) => {
  return {
    users: state.dialogPage.users,
    messages: state.dialogPage.messages,
    newMessageBody: state.dialogPage.newMessageBody,
    isAuth: state.auth.isAuth,
  };
};
let f2 = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    },
  };
};

export default compose(connect(f1, f2), withRedirect)(Dialogs);
