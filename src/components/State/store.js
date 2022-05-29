import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

let store = {
  _state: {
    navbarPage: {
      friends: [
        {
          id: 1,
          name: 'Mirali',
          img: 'https://picsum.photos/50/50',
        },
        {
          id: 2,
          name: 'Mohir',
          img: 'https://picsum.photos/50/51',
        },
        {
          id: 3,
          name: 'Sancho',
          img: 'https://picsum.photos/50/52',
        },
      ],
    },
    profilePage: {
      newPostText: 'GGMU!',
      posts: [
        {
          id: 1,
          text: 'Its my first post',
          count: 15,
        },
        {
          id: 2,
          text: 'Hi',
          count: 6,
        },
        {
          id: 3,
          text: 'Today is a good day',
          count: 35,
        },
      ],
    },
    dialogPage: {
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
    },
  },

  _rerender() {},
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerender = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._rerender(this._state);
  },
};

window.store = store;
export default store;
