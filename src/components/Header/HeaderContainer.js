import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthUSerDataTC } from '../State/headerReducer';
import Header from './Header';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUSerData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userId: state.auth.userId,
  users: state.usersPage.users,
});
export default connect(mapStateToProps, { getAuthUSerData: getAuthUSerDataTC })(HeaderContainer);
