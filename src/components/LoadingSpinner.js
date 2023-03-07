import React from 'react';
import { PacmanLoader } from 'react-spinners';
const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="loading_spinner">
        <PacmanLoader size={50} color="#69db7c" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
