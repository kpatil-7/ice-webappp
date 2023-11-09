import React, { useState } from 'react';
import './styles.css';

function Insert() {
  const [data, setData] = useState({
    ID: '',
    OSP: '',
    BCF: '',
    ECRF: '',
    ESRP: '',
    CHE: '',
    Location: ''
  });

  const [successMessage, setSuccessMessage] = useState(''); // Define at the top level
  const [errorMessage, setErrorMessage] = useState(''); 
  const handleBack = () => {
    window.location.href = "/Admin2"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validateInputs = () => {
    // Check if any input field is empty
    for (const key in data) {
      if (data[key] === '') {
        setErrorMessage('Please fill in all fields');
        return false;
      }
    }
    return true;
  };



  const handleInsert = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/insertData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setErrorMessage('');
        setSuccessMessage('Data saved successfully');
        setData({
          ID: '',
          OSP: '',
          BCF: '',
          ECRF: '',
          ESRP: '',
          CHE: '',
          Location: '',
        });
        window.location.href = '/Admin2';
      } else {
        setErrorMessage('Failed to save data');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error occurred while saving data');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <div className="div2">
      <h2>Insert:</h2>
      <button className="back" onClick={handleBack}>
          Back
        </button>
        </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>OSP</th>
            <th>BCF</th>
            <th>ECRF</th>
            <th>ESRP</th>
            <th>CHE</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="ID"
                value={data.ID}
                onChange={handleInputChange}
              />
            </td>
            <td><input
              type="text"
              name="OSP"
              value={data.OSP}
              onChange={handleInputChange}
            /></td>
            <td><input
              type="text"
              name="BCF"
              value={data.BCF}
              onChange={handleInputChange}
            /></td>
            <td><input
              type="text"
              name="ECRF"
              value={data.ECRF}
              onChange={handleInputChange}
            /></td>
            <td><input
              type="text"
              name="ESRP"
              value={data.ESRP}
              onChange={handleInputChange}
            /></td>
            <td><input
              type="text"
              name="CHE"
              value={data.CHE}
              onChange={handleInputChange}
            /></td>
            <td><input
              type="text"
              name="Location"
              value={data.Location}
              onChange={handleInputChange}
            /></td>
          </tr>
        </tbody>
        </table>
      <button type="button" onClick={handleInsert}>
        Insert
      </button>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Insert;
