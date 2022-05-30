import React from 'react';
import { connect } from 'react-redux';

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
const DialogsContainer = connect(f1, f2)(Dialogs);


export default DialogsContainer;
