import React, { useState } from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../State/profileReducer';
import MyPosts from './MyPosts';

function MyPostsContainer(props) {
  let state = props.store.getState();

  let addPost = (text) => {
    props.store.dispatch(addPostActionCreator(text));
  };
  let updateText = (text) => {
    props.store.dispatch(updatePostTextActionCreator(text));
  };

  return (
    <MyPosts
      addPost={addPost}
      updateText={updateText}
      newPostText={state.profilePage.newPostText}
      posts={state.profilePage.posts}
    />
  );
}

export default MyPostsContainer;
