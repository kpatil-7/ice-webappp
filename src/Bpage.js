import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import logo from './logo.png';

function DropdownMenu({ options, onChange }) {
  return (
    <select onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function Bpage() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const testOptions = ['Queued', 'Passed', 'Failed'];

  const initialTestValues = JSON.parse(localStorage.getItem('testValues')) || {};
  const initialTestData = JSON.parse(localStorage.getItem('filteredTestData')) || [];

  const [testValues, setTestValues] = useState(initialTestValues);
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState({});
  const [testData, setTestData] = useState(initialTestData);
  const [failedTests, setFailedTests] = useState([]);

  useEffect(() => {
    fetchUserData();
    getTestResults();
    setComments({});
  }, []);

  const fetchUserData = () => {
    fetch(`http://localhost:5000/Bpage?username=${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Server Response:', data);
        if (data.user) {
          setUserData(data.user);
          console.log(data);
        } else {
          console.error('User not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Promise.all(
      Object.entries(testValues).map(([columnName, statusValue]) => {
        if (statusValue === 'Failed') {
          return updateTestTable(columnName, statusValue, comments[columnName]);
        } else {
          return updateTestTable(columnName, statusValue, comments[columnName]);
        }
      })
    )
      .then(() => {
        setMessage('Updates saved successfully');
        setTimeout(() => {
          setMessage('');
        }, 3000);
        getTestResults();
      })
      .catch((error) => {
        console.error('Error updating test tables:', error);
      });
  };

  const updateTestTable = (columnValue, statusValue, commentValue) => {
    console.log(columnValue);
    return fetch('http://localhost:5000/updateTestTable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        columnValue,
        statusValue,
        comments: commentValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      });
  };

  const getTestResults = () => {
    fetch(`http://localhost:5000/getTestResults?username=${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Server Response:', data);
        if (data.results) {
          const filteredTests = data.results.filter((test) => testValues[test] !== 'Passed');
          setTestData(filteredTests);
          localStorage.setItem('filteredTestData', JSON.stringify(filteredTests));
        } else {
          console.error('User not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  const getFailedTests = () => {
  fetch(`http://localhost:5000/getFailedTests?username=${username}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.failedTests) {
        setFailedTests(data.failedTests);
      } else {
        console.error('No failed tests found');
      }
    })
    .catch((error) => {
      console.error('Error fetching failed tests:', error);
    });
};

  const handleTestChange = (columnName, statusValue) => {
    setTestValues((prevTestValues) => ({
      ...prevTestValues,
      [columnName]: statusValue,
    }));
    localStorage.setItem('testValues', JSON.stringify({ ...testValues, [columnName]: statusValue }));
  };

  const handleCommentsChange = (columnName, commentValue) => {
    setComments((prevComments) => ({
      ...prevComments,
      [columnName]: commentValue,
    }));
  };

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        </div>
      <div className="top-bar">
        <button className="logout-button" onClick={handleLogout}>
          <Link to="/">Logout</Link>
        </button>
      </div>
      <div style={{ marginBottom: '50px' }}></div>
      <h1>Welcome {username}!</h1>
      <div>
        <h2>Tests:</h2>
        <form onSubmit={handleSubmit}>
          <ul>
            {testData.length === 0 ? (
              navigate('/done')
            ) : (
              testData.map((columnName) => {
                return (
                  <li key={columnName}>
                    {columnName}:
                    <DropdownMenu
                      options={testOptions}
                      onChange={(e) => handleTestChange(columnName, e.target.value)}
                      className = "accent-dropdown"
                    />
                    {testValues[columnName] === 'Failed' && (
                      <input
                        type="text"
                        placeholder={`Enter comments`}
                        value={comments[columnName] || ''}
                        onChange={(e) => handleCommentsChange(columnName, e.target.value)}
                      />
                    )}
                  </li>
                );
              })
            )}
          </ul>
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Bpage;



