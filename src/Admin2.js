import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Admin2() {
  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="top-bar">
        <button className="logout-button" onClick={handleLogout}>
          <Link to="/">Logout</Link>
        </button>
      </div>
      <img src={logo} alt="logo" className="logo" />
      <h1>Hi admin2</h1>
    </div>
  );
}

export default Admin2;
