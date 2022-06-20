import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div className={s.input}>
        <Field component={'textarea'} name={'newPostText'} placeholder="Your News..." />
      </div>
      <button className={s.btn}>Send</button>
    </form>
  );
};
const NewPostForm = reduxForm({ form: 'addPostForm' })(PostForm);

export default NewPostForm;
