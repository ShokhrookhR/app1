import { connect } from 'react-redux';
import { addPostActionCreator } from '../../State/profileReducer';
import MyPosts from './MyPosts';

let f1 = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};
let f2 = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(f1, f2)(MyPosts);

export default MyPostsContainer;
