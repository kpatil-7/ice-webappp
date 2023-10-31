import React, { useState, useEffect } from 'react';
import './styles.css';
function Admin2() {
  const [data, setData] = useState([]);
  const [failedTestCases, setFailedTestCases] = useState([]);
  const [selectedTooling, setSelectedTooling] = useState('All');
  const [testScenarioChecks, setTestScenarioChecks] = useState({});
  const [notesMap, setNotesMap] = useState({});
  const [editingTest, setEditingTest] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/api/tooling-data')
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
            // initialNotesMap[row.ID] = '';
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

    fetch('http://localhost:5001/api/failed-test-cases')
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

  const handleLogout = () => {
    // Handle logout here
  };

  const handleToolingFilterChange = (e) => {
    setSelectedTooling(e.target.value);
  };

  const handleCheckboxChange = (testID, scenario) => {
    setTestScenarioChecks((prevTestScenarioChecks) => ({
      ...prevTestScenarioChecks,
      [testID]: {
        ...prevTestScenarioChecks[testID],
        [scenario]: !prevTestScenarioChecks[testID][scenario],
      },
    }));
  };

  const handleNotesChange = (testID, notes) => {
    setNotesMap((prevNotesMap) => ({
      ...prevNotesMap,
      [testID]: notes,
    }));
  };
  
  const handleUpdateNotesChange = (testID, updateNotes) => {
    // Update the update notes for the specified test
    setFailedTestCases((prevLessSuccessfulTests) =>
      prevLessSuccessfulTests.map((test) =>
        test.ID === testID ? { ...test, UpdateNotes: updateNotes } : test
      )
    );
  };

  const setEditTest = (testID) => {
    setEditingTest(testID);
  };

  const handleSubmit = (testID) => {
    const notes = notesMap[testID];
    const Test_Scenario_1 = testScenarioChecks[testID] ? testScenarioChecks[testID].TS1 : false;
    const Test_Scenario_2 = testScenarioChecks[testID] ? testScenarioChecks[testID].TS2 : false;
    const Test_Scenario_3 = testScenarioChecks[testID] ? testScenarioChecks[testID].TS3 : false;
    const Test_Scenario_4 = testScenarioChecks[testID] ? testScenarioChecks[testID].TS4 : false;
    const Test_Scenario_5 = testScenarioChecks[testID] ? testScenarioChecks[testID].TS5 : false;
    const Test_Scenario_6 = testScenarioChecks[testID] ? testScenarioChecks[testID].TS6 : false;

    const postData = {
      testID,
      Test_Scenario_1,
      Test_Scenario_2,
      Test_Scenario_3,
      Test_Scenario_4,
      Test_Scenario_5,
      Test_Scenario_6,
      notes,
    };

    fetch('http://localhost:5001/submitTestResult', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.message);
        setData((prevData) => prevData.filter((row) => row.ID !== testID));
        if (
          Test_Scenario_1 ||
          Test_Scenario_2 ||
          Test_Scenario_3 ||
          Test_Scenario_4 ||
          Test_Scenario_5 ||
          Test_Scenario_6
        ) {
          setFailedTestCases((prevFailedTestCases) =>
            prevFailedTestCases.filter((row) => row.ID !== testID)
          );
        }
      })
      .catch((error) => {
        console.error('Error submitting test result:', error);
      });
  };

  const filteredData =
    selectedTooling === 'All'
      ? data
      : data.filter((row) => row.ToolingName === selectedTooling);

  return (
    <div className="app-container">
      <div className="header">
        <h1>Tooling Data</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="status-filter">
        <label htmlFor="toolingFilter">Filter by Tooling:</label>
        <select
          id="toolingFilter"
          onChange={handleToolingFilterChange}
          value={selectedTooling}
        >
          <option value="All">All</option>
          <option value="Tooling #1 MORNING">Tooling #1 MORNING</option>
          <option value="Tooling #1 AFTERNOON">Tooling #1 AFTERNOON</option>
          <option value="Tooling #2 MORNING">Tooling #2 MORNING</option>
          <option value="Tooling #2 AFTERNOON">Tooling #2 AFTERNOON</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>OSP_LNG</th>
            <th>BCF</th>
            <th>ECRF</th>
            <th>ESRP</th>
            <th>CHE</th>
            <th>Location</th>
            <th>TS:1 I3 Call Origination</th>
            <th>TS:2 Transfer & Conferencing</th>
            <th>TS:3 Transfer with EIDO Conveyance Subscription to an incident</th>
            <th>TS:4 EIDO Subscription for Call State Update Notifications</th>
            <th>TS:5 Alternative-Overflow via Service or Queue State</th>
            <th>TS:6 Redirection-Alternative-Overflow via SIP Error Response</th>
            <th>Notes</th>
            <th>Submit</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.ID}</td>
              <td>{row['OSP_LNG']}</td>
              <td>{row.BCF}</td>
              <td>{row.ECRF}</td>
              <td>{row.ESRP}</td>
              <td>{row.CHE}</td>
              <td>{row.Location}</td>
              <td>
                <input
                  type="checkbox"
                  checked={testScenarioChecks[row.ID] ? testScenarioChecks[row.ID].TS1 : false}
                  onChange={() => handleCheckboxChange(row.ID, 'TS1')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={testScenarioChecks[row.ID] ? testScenarioChecks[row.ID].TS2 : false}
                  onChange={() => handleCheckboxChange(row.ID, 'TS2')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={testScenarioChecks[row.ID] ? testScenarioChecks[row.ID].TS3 : false}
                  onChange={() => handleCheckboxChange(row.ID, 'TS3')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={testScenarioChecks[row.ID] ? testScenarioChecks[row.ID].TS4 : false}
                  onChange={() => handleCheckboxChange(row.ID, 'TS4')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={testScenarioChecks[row.ID] ? testScenarioChecks[row.ID].TS5 : false}
                  onChange={() => handleCheckboxChange(row.ID, 'TS5')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={testScenarioChecks[row.ID] ? testScenarioChecks[row.ID].TS6 : false}
                  onChange={() => handleCheckboxChange(row.ID, 'TS6')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={notesMap[row.ID]}
                  onChange={(e) => handleNotesChange(row.ID, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleSubmit(row.ID)}>Submit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="failed-tests">
        <h2>Less Successful Tests</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>OSP_LNG</th>
              <th>BCF</th>
              <th>ECRF</th>
              <th>ESRP</th>
              <th>CHE</th>
              <th>Location</th>
              <th>TS:1 I3 Call Origination</th>
              <th>TS:2 Transfer & Conferencing</th>
              <th>TS:3 Transfer with EIDO Conveyance Subscription to an incident</th>
              <th>TS:4 EIDO Subscription for Call State Update Notifications</th>
              <th>TS:5 Alternative-Overflow via Service or Queue State</th>
              <th>TS:6 Redirection-Alternative-Overflow via SIP Error Response</th>
              <th>Notes</th>
              <th>Update Notes</th> 
              <th>Actions</th>
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
                <td>{row.Test_Scenario_1}</td>
                <td>{row.Test_Scenario_2}</td>
                <td>{row.Test_Scenario_3}</td>
                <td>{row.Test_Scenario_4}</td>
                <td>{row.Test_Scenario_5}</td>
                <td>{row.Test_Scenario_6}</td>
                <td>{row.Notes}</td>
                <td>
                <input
                  type="text"
                  value={notesMap[row.ID]}
                  onChange={(e) => handleNotesChange(row.ID, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleSubmit(row.ID)}>Submit</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin2;
