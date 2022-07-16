import React from 'react';
import { connect } from 'react-redux';
import { getAuthUSerDataTC, logout } from '../State/authReducer';
import Header from './Header';

const HeaderContainer = (props) => {
  React.useEffect(() => {
    props.getAuthUSerData();
  }, [props]);
  return <Header {...props} />;
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userId: state.auth.userId,
  users: state.usersPage.users,
});
export default connect(mapStateToProps, { getAuthUSerData: getAuthUSerDataTC, logout: logout })(
  HeaderContainer,
);
