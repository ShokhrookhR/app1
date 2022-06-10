const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
  userProfile: null,
};

const profileReducer = (state = initialization, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.textPost,
      };
    case ADD_POST:
      let newPost = {
        id: Date.now(),
        text: action.postText,
        count: 15,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.profile,
      };
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
export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export default profileReducer;
