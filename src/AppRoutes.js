import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import UserProfileForm from './UserProfileForm';
import Bpage from './Bpage';
import Overview from './Overview';
import Done from './Done';
import Admin2 from './Admin2';

function AppRoutes() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const userRole = 'admin';
    if (userRole === 'admin') {
      setUsername('admin');
    
    }
  }, []);


  // 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Welcome/:username" element={<Welcome />} />
        <Route path="/Admin2" element={<Admin2 />} />
        <Route path="/UserProfileForm/:username" element={<UserProfileForm />} />
        <Route path="/BPage/:username" element={<Bpage />} />
        <Route path="/Done" element={<Done />} />
        {username === 'admin' && (
          <Route path="/Overview" element={<Overview />} />
        )}
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
