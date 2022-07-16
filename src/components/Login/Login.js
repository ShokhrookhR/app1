import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsContorls/FormsControls';
import { login } from '../State/authReducer';
import { maxLengthCreator, required } from '../utils/validators';
import s from './Login.module.css';
import style from './../Common/FormsContorls/FormsControls.module.css';
let maxLength20 = maxLengthCreator(20);
let maxLength15 = maxLengthCreator(15);
const LoginForm = (props) => {
  console.log('Rerender');
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          type={'email'}
          validate={[required, maxLength20]}
          placeholder={'Login'}
          name={'login'}
        />
      </div>
      <div>
        <Field
          component={Input}
          type={'password'}
          validate={[required, maxLength15]}
          placeholder={'Password'}
          name={'password'}
        />
      </div>
      <div>
        <Field component={Input} type={'checkbox'} name={'rememberMe'} />
        Remember Me
      </div>
      {props.error && <div className={style.formControlSummary}>{props.error}</div>}

      <div>
        <button className={s.login}>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (value) => {
    console.log(value);
    props.login(value.login, value.password, value.rememberMe);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.body}>
        <h1 className={s.title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} {...props} />
      </div>
    </div>
  );
};

export default connect(null, {
  login: login,
})(Login);
