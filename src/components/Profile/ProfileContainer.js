import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../State/profileReducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { usersApi } from '../../api/api';
import withRedirect from '../Redirect/withRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }

    usersApi.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
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
// let AuthRedirectComponent = withRedirect(ProfileContainer);

export default compose(
  connect(mapStateToProps, { setUserProfile: setUserProfileAC }),
  withRouter,
  withRedirect,
)(ProfileContainer);

