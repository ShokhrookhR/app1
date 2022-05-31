const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialization = {
  users: [
    {
      name: 'Shahzod',
      id: 1,
      age: 25,
    },
    {
      name: 'Behzod',
      id: 2,
      age: 25,
    },
    {
      name: 'Jovox',
      id: 3,
      age: 25,
    },
    {
      name: 'Dilka',
      id: 4,
      age: 25,
    },
    {
      name: 'Mirali',
      id: 5,
      age: 25,
    },
  ],
  messages: [
    { id: 1, message: 'Hello!' },
    { id: 1, message: 'How are you?!' },
    { id: 1, message: 'Where are you from?!' },
    { id: 1, message: 'Hello!' },
    { id: 1, message: 'Where are you from?!' },
  ],
  newMessageBody: 'GGMU!',
};

const dialogsReducer = (state = initialization, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      {
        let newMessage = { id: Date.now(), message: action.textMessage };
        let stateCopy={...state}
        stateCopy.messages=[...state.messages]
        stateCopy.messages.push(newMessage);
        stateCopy.newMessageBody = '';
        return stateCopy;
      }
    case UPDATE_MESSAGE_TEXT:
      {
        let stateCopy={...state}
        stateCopy.newMessageBody = action.textMessage;

      return stateCopy;
    }

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
