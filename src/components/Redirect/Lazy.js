import React from 'react';
import Preloader from '../Users/Preloader';

const withSuspense = (Component) => {
  return (props) => {
    <React.Suspense fallback={<Preloader />}>
      <Component {...props} />
    </React.Suspense>;
  };
};

export default withSuspense;
