const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = { id: Date.now(), message: action.textMessage };
      state.messages.push(newMessage);
      state.newMessageBody = '';
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageBody = action.textMessage;

      return state;

    default:
      return state;
  }
};
export const addMessageActionCreator = (text) => {
  return {
    type: ADD_MESSAGE,
    textMessage: text,
  };
};
export const updateMessageActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    textMessage: text,
  };
};
export default dialogsReducer;
