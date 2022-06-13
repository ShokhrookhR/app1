import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserDataAC } from '../State/headerReducer';
import Header from './Header';

class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setUserData(id, login, email);
          console.log(this.props.data);
        }
      });
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
export default connect(mapStateToProps, { setUserData: setUserDataAC })(HeaderContainer);
