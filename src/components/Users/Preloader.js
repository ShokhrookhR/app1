import React from 'react';
import preloader from '../../assets/SVG/preloader.svg';

const Preloader = () => {
  return (
    <div>
      <img src={preloader} alt="Loading" />
    </div>
  );
};

export default Preloader;
