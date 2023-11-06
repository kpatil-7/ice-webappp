import React, { useState, useEffect } from 'react';
import './styles.css';
function Logs() {
    const [failedTestCases, setFailedTestCases] = useState([]);
    useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/failed-test-cases`)
      .then((response) => response.json())
      .then((data) => {
        if (data.failedTestCases) {
          setFailedTestCases(data.failedTestCases);
        } else {
          console.error('Failed test cases not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching failed test cases:', error);
      });
  }, []);


  const handleBack = () => {
    window.location.href = "/Admin2"
  };
    return(
      <div>
        <div className="div2">
        <h2>Logs</h2>
        <button className="back" onClick={handleBack}>
          Back
        </button>
        </div>
        <table>
          <thead>
          <tr>
        <th style={{ width: '15px' }}>ID</th>
        <th style={{ width: '5px' }}>OSP_LNG</th>
        <th style={{ width: '5px' }}>BCF</th>
        <th style={{ width: '5px' }}>ECRF</th>
        <th style={{ width: '5px' }}>ESRP</th>
        <th style={{ width: '5px' }}>CHE</th>
        <th style={{ width: '15px' }}>Location</th>
        <th style={{ width: '400px' }}>Notes</th>
        <th style={{ width: '10px' }}>TS:1 I3 Call Origination</th>
        <th style={{ width: '10px' }}>TS:2 Transfer & Conferencing</th>
        <th style={{ width: '10px' }}>TS:3 Transfer with EIDO Conveyance Subscription to an incident</th>
        <th style={{ width: '10px' }}>TS:4 EIDO Subscription for Call State Update Notifications</th>
        <th style={{ width: '10px' }}>TS:5 Alternative-Overflow via Service or Queue State</th>
        <th style={{ width: '10px' }}>TS:6 Redirection-Alternative-Overflow via SIP Error Response</th>
      </tr>
          </thead>
          <tbody>
            {failedTestCases.map((row, index) => (
              <tr key={index}>
                <td>{row.ID}</td>
                <td>{row['OSP_LNG']}</td>
                <td>{row.BCF}</td>
                <td>{row.ECRF}</td>
                <td>{row.ESRP}</td>
                <td>{row.CHE}</td>
                <td>{row.Location}</td>
                <td>{row.Notes}</td>
                <td>{row.Test_Scenario_1}</td>
                <td>{row.Test_Scenario_2}</td>
                <td>{row.Test_Scenario_3}</td>
                <td>{row.Test_Scenario_4}</td>
                <td>{row.Test_Scenario_5}</td>
                <td>{row.Test_Scenario_6}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}
export default Logs;
