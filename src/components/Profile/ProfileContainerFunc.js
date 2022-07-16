import React from 'react';
import { connect } from 'react-redux';
import { setProfile, setStatus, updateStatus } from '../State/profileReducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import withRedirect from '../Redirect/withRedirect';
import { compose } from 'redux';

const ProfileContainerFunc = (props) => {
  React.useEffect(() => {
    let userId = props.router.params.userId;
    if (!userId) {
      userId = props.loginedUserId;
    }
    props.setProfile(userId);
    props.setStatus(userId);
  }, []);

  return <Profile {...props} />;
};

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  profileStatus: state.profilePage.profileStatus,
  loginedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
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
)(ProfileContainerFunc);
