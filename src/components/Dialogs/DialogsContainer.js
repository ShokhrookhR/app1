import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withRedirect from '../Redirect/withRedirect';

import { addMessageActionCreator, updateMessageActionCreator } from '../State/dialogsReducer';

import Dialogs from './Dialogs';

// function DialogsContainer(props) {
//   let state = props.store.getState();

//   let addMessage = (text) => {
//     if (state.newMessageBody) {
//     props.store.dispatch(addMessageActionCreator(text));
//     }
//   };
//   let updateMessageText = (text) => {
//     props.store.dispatch(updateMessageActionCreator(text));
//   };
//   return (
//     <Dialogs
//       addMessage={addMessage}
//       updateMessageText={updateMessageText}
//       users={state.dialogPage.users}
//       messages={state.dialogPage.messages}
//       newMessageBody={state.dialogPage.newMessageBody}
//     />
//   );}
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
    updateMessageText: (text) => {
      dispatch(updateMessageActionCreator(text));
    },
  };
};

export default compose(connect(f1, f2), withRedirect)(Dialogs);
