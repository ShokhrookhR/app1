const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

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
  // addMessage(newText){
  //   let newMessage={message:newText}
  //   this._state.dialogPage.messages.push(newMessage);
  //   this._rerender(this._state);
  // },
  _rerender() {},
  getState() {
    return this._state;
  },
  // _addPost(postMessage) {
  //   let newPost = {
  //     id: Date.now(),
  //     text: postMessage,
  //     count: 15,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._rerender(this._state);
  // },
  // _updatePostText(textPost) {
  //   this._state.profilePage.newPostText = textPost;

  //   this._rerender(this._state);
  // },
  listener(observer) {
    this._rerender = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: Date.now(),
        text: action.postText,
        count: 15,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerender(this._state);
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.textPost;

      this._rerender(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = { id: Date.now(), message: action.textMessage };
      this._state.dialogPage.messages.push(newMessage);
      this._state.dialogPage.newMessageBody = '';
      this._rerender(this._state);
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.dialogPage.newMessageBody = action.textMessage;
      this._rerender(this._state);
    }
  },
};
export const addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    postText: text,
  };
};
export const updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    textPost: text,
  };
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
window.store = store;
export default store;
