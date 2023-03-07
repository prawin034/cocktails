import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="error">
        <h1 className="error_h1">An error occurred!</h1>
        <p className="error_p">Could not find this page!</p>

        <button className="error_btn" onClick={() => navigate('/')}>
          BACK
        </button>
      </main>
    </>
  );
};

export default ErrorPage;
