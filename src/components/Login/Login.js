import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { sendLoginForm } from '../State/loginReducer';
import './Login.module.css';
import s from './Login.module.css';
const LoginForm = (props) => {
  console.log('Rerender');
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="email" component={'input'} placeholder={'Login'} name={'login'} />
      </div>
      <div>
        <Field type="password" component={'input'} placeholder={'Password'} name={'password'} />
      </div>
      <div>
        <Field type="checkbox" component={'input'} name={'rememberMe'} />
        Remember Me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (value) => {
    console.log(value);
    props.sendLoginForm(value.login, value.password, value.rememberMe);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} {...props} />
    </div>
  );
};
let mapStateToProps = (state) => {};

export default connect(mapStateToProps, {
  setLogin: sendLoginForm,
})(Login);
