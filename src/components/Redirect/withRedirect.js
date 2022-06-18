import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});
const withRedirect = (Component) => {
  let withAuthRedirect = (props) => {
    if (!props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };

  return connect(mapStateToPropsForRedirect)(withAuthRedirect);
};

export default withRedirect;
