import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../Common/FormsContorls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators';
import s from './MyPosts.module.css';
let maxLength20 = maxLengthCreator(20);
const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div className={s.input}>
        <Field
          component={Textarea}
          validate={[required, maxLength20]}
          name={'newPostText'}
          placeholder="Your News..."
        />
      </div>
      <button className={s.btn}>Send</button>
    </form>
  );
};
const NewPostForm = reduxForm({ form: 'addPostForm' })(PostForm);

export default NewPostForm;
