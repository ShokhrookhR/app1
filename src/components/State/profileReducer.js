import { usersApi } from '../../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
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
  profileStatus: null,
};

const profileReducer = (state = initialState, action) => {
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
    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.status,
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
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setProfileStatusAC = (status) => {
  return {
    type: SET_PROFILE_STATUS,
    status,
  };
};
export const setProfile = (userId) => (dispatch) => {
  usersApi.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};
export const setStatus = (userId) => (dispatch) => {
  usersApi.setProfileStatus(userId).then((data) => {
    dispatch(setProfileStatusAC(data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  usersApi.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setProfileStatusAC(status));
    }
  });
};

export default profileReducer;
