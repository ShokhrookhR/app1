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
      {
        let newPost = {
          id: Date.now(),
          text: action.postText,
          count: 15,
        };
        let stateCopy = { ...state };
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
      }
    case UPDATE_POST_TEXT:
      {
        let stateCopy={...state}
        stateCopy.newPostText = action.textPost;
      return stateCopy;}

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
