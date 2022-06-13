import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../State/profileReducer';
import Profile from './Profile';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setUserProfile(response.data);
        console.log(this.props.router);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })(
  withRouter(ProfileContainer),
);
