import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; 

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const logoStyle = {
  width: '350px', 
  height: 'auto',
};

const handleLogout = () => {
  window.location.reload();
};

function Done() {
  return (
    <div style={centerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} /> 
      <h1>You are all set for ICE 11!</h1>
      <button className="logout-button" onClick={handleLogout}>
          <Link to="/">Logout</Link>
        </button>
    </div>
  );
}

export default Done;
