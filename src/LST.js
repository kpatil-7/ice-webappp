import React, { useState, useEffect } from 'react';
import './styles.css';
function LST() {
    const [data, setData] = useState([]);
    const [failedTestCases, setFailedTestCases] = useState([]);
    const [selectedTooling, setSelectedTooling] = useState('All');
    const [testScenarioChecks, setTestScenarioChecks] = useState({});
    const [notesMap, setNotesMap] = useState({});

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/tooling-data`)
          .then((response) => response.json())
          .then((data) => {
            if (data.toolingData) {
              const initialTestScenarioChecks = {};
              const initialNotesMap = {};
              data.toolingData.forEach((row) => {
                initialTestScenarioChecks[row.ID] = {
                  TS1: false,
                  TS2: false,
                  TS3: false,
                  TS4: false,
                  TS5: false,
                  TS6: false,
                };
              });
              setTestScenarioChecks(initialTestScenarioChecks);
              setNotesMap(initialNotesMap);
              setData(data.toolingData);
            } else {
              console.error('Tooling data not found');
            }
          })
          .catch((error) => {
            console.error('Error fetching tooling data:', error);
          });
        }, []);

        const handleBack = () => {
            window.location.href = "/Admin2"
          };

    const filteredData =
    selectedTooling === 'All'
      ? data
      : data.filter((row) => row.ToolingName === selectedTooling);

    return(
      <div>
      <div class="div2">
        <h2>Less Successful Tests</h2>
        <button className="back" onClick={handleBack}>
          Back
        </button>
        </div>
        <table>
          <thead>
            <tr>
            <th style={{ width: '10px' }}>ID</th>
            <th style={{ width: '10px' }}>OSP_LNG</th>
            <th style={{ width: '10px' }}>BCF</th>
            <th style={{ width: '10px' }}>ECRF</th>
            <th style={{ width: '10px' }}>ESRP</th>
            <th style={{ width: '10px' }}>CHE</th>
            <th style={{ width: '10px' }}>Location</th>
            <th style={{ width: '400px' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.ID}</td>
                <td>{row.OSP}</td>
                <td>{row.BCF}</td>
                <td>{row.ECRF}</td>
                <td>{row.ESRP}</td>
                <td>{row.CHE}</td>
                <td>{row.Location}</td>
                <td>{row.Notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )

}
export default LST;