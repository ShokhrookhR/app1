// let rerender = () => {
//   console.log('Hi!');
// };
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

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
      newPostText: 'assa',
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
        { message: 'Hello!' },
        { message: 'How are you?!' },
        { message: 'Where are you from?!' },
        { message: 'Hello!' },
        { message: 'Where are you from?!' },
      ],
    },
  },
  _rerender() {
    console.log('Hi!');
  },
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
window.store = store;
export default store;
