import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updatePostTextActionCreator } from '../../State/profileReducer';
import MyPosts from './MyPosts';

// function MyPostsContainer(props) {
//   let state = props.store.getState();

//   let addPost = (text) => {
//     props.store.dispatch(addPostActionCreator(text));
//   };
//   let updateText = (text) => {
//     props.store.dispatch(updatePostTextActionCreator(text));
//   };

//   return (
//     <MyPosts
//       addPost={addPost}
//       updateText={updateText}
//       newPostText={state.profilePage.newPostText}
//       posts={state.profilePage.posts}
//     />
//   );
// }

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
    updateText: (text) => {
      dispatch(updatePostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(f1, f2)(MyPosts);

export default MyPostsContainer;
