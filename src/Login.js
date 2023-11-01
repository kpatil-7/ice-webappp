import React, { useState,useEffect } from 'react';
import logo from './logo.png'
import bg from './bg.png'
import './styles.css'



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    setUsername('');  
    setPassword('');  
  }, []);

  const handleLogin = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      const data = await response.json();
      window.location.href = `/Welcome/${data.user.username}`;
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
    <div>
    <div className="image-container" style={{ marginTop: '-120px', marginBottom: '-80px' }}>
    <img src={logo}  alt ="logo"
    width={230} height={200} 
    class ="center"/>;
    </div>

    <div class='login-container'>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px', 
            fontSize: '18px' 
          }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%', 
            padding: '12px', 
            borderRadius: '8px', 
            fontSize: '18px'
          }}
        />
      </div>
      <div style={{ marginTop: '40px' }}>
        <button onClick={handleLogin}style={{
          width: '104%',
          padding: '12px', 
          borderRadius: '8px', 
          fontSize: '18px' 
        }}>Login</button>
      </div>
    </div>
    </div>
    <div className="footer-container">
        <img src={bg} alt="footer" width="100%" height="auto" className="center" />
      </div>
    </div>
  );
};

export default Login;
