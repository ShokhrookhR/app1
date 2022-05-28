import React from 'react';

import { addMessageActionCreator, updateMessageActionCreator } from '../State/dialogsReducer';

import Dialogs from './Dialogs';

function DialogsContainer(props) {
  let state = props.store.getState();

  let addMessage = (text) => {
    // if (state.newMessageBody) {
    props.store.dispatch(addMessageActionCreator(text));
    // }
  };
  let updateMessageText = (text) => {
    props.store.dispatch(updateMessageActionCreator(text));
  };
  return (
    <Dialogs
      addMessage={addMessage}
      updateMessageText={updateMessageText}
      users={state.dialogPage.users}
      messages={state.dialogPage.messages}
      newMessageBody={state.dialogPage.newMessageBody}
    />
  );
}

export default DialogsContainer;
