const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialization = {
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
};

const profileReducer = (state = initialization, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Date.now(),
        text: action.postText,
        count: 15,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.textPost;
      return state;

    default:
      return state;
  }
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
export default profileReducer;
