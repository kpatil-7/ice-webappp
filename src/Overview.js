import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from './logo.png';

function Overview() {
  const [testsData, setTestsData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');

  useEffect(() => {
    fetch('http://34.150.173.125:3000/getAllTests')
      .then((response) => response.json())
      .then((data) => {
        if (data.testsData) {
          setTestsData(data.testsData);
        } else {
          console.error('Tests data not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching tests data:', error);
      });
  }, []);

  const handleLogout = () => {
    window.location.reload();
  };

  const handleStatusFilterChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const filteredTests = selectedStatus === 'All'
    ? testsData
    : testsData.filter((test) => test.Status === selectedStatus);

  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1>Tests Overview</h1>
        <button className="logout-button" onClick={handleLogout}>
          <Link to="/">Logout</Link>
        </button>
      </div>

      <div className="status-filter">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          onChange={handleStatusFilterChange}
          value={selectedStatus}
        >
          <option value="All">All</option>
          <option value="Passed">Passed</option>
          <option value="Failed">Failed</option>
        </select>
      </div>


      <div style={{ marginBottom: '25px' }}></div>

      <table>
        <thead>
          <tr>
            <th>Pair</th>
            <th>Status</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {filteredTests.map((test, index) => (
            <tr key={index}>
              <td>{test.BLpair}</td>
              <td>{test.Status}</td>
              <td>{test.Comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Overview;
