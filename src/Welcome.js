<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import BPage from './Bpage';
import UserProfileForm from './UserProfileForm';



function Welcome() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true);

  useEffect(() => {
    fetch(`http://34.150.173.125:3306/checkNameColumn?username=${username}`)
    
      .then((response) => response.json())
      .then((data) => {
        if (data.name !== null) {
          setIsFirstTimeLogin(false);
        }
      })
      .catch((error) => {
        console.error('Error checking name column:', error);
      });
  }, [username]);

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
        {
          username === 'admin' ? (
            navigate('/Overview')
          ) : username === 'admin2' ? (
            navigate('/Admin2')
          ) : !isFirstTimeLogin ? (
            <BPage username={username} />
          ) : (
            <UserProfileForm username={username} />
          )
        }
    </div>
  );
}

export default Welcome;
=======
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import BPage from './Bpage';
import UserProfileForm from './UserProfileForm';



function Welcome() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/checkNameColumn?username=${username}`)
    
      .then((response) => response.json())
      .then((data) => {
        if (data.name !== null) {
          setIsFirstTimeLogin(false);
        }
      })
      .catch((error) => {
        console.error('Error checking name column:', error);
      });
  }, [username]);

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
        {
          username === 'admin' ? (
            navigate('/Overview')
          ) : username === 'admin2' ? (
            navigate('/Admin2')
          ) : !isFirstTimeLogin ? (
            <BPage username={username} />
          ) : (
            <UserProfileForm username={username} />
          )
        }
    </div>
  );
}

export default Welcome;
>>>>>>> corey-work
