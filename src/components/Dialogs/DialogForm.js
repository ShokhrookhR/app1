import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../Common/FormsContorls/FormsControls';
import { maxLengthCreator, required } from '../utils/validators';
let maxLength30 = maxLengthCreator(30);
const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength30]}
        name={'message'}
        placeholder={'Type a message'}
      />
      <button>Send</button>
    </form>
  );
};
const Dialog = reduxForm({
  form: 'DialogForm',
})(DialogForm);
export default Dialog;
