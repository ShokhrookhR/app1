import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProfile, setStatus, updateStatus } from '../State/profileReducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import withRedirect from '../Redirect/withRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 24363;
    }
    this.props.setProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  profileStatus: state.profilePage.profileStatus,
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

export default compose(
  connect(mapStateToProps, {
    setProfile: setProfile,
    setStatus: setStatus,
    updateStatus: updateStatus,
  }),
  withRouter,
  withRedirect,
)(ProfileContainer);


