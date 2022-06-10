import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../State/profileReducer';
import Profile from './Profile';
import axios from 'axios';

class ProfileContainer extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <Profile {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
});

export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })(ProfileContainer);
