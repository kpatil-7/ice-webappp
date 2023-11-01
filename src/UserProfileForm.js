<<<<<<< HEAD
import React, { useState } from 'react';
import logo from './logo.png';


const UserProfileForm = ({ username }) => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, name, phoneNumber, email };

    try {
      const response = await fetch('http://localhost:5001/userprofileform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.user && data.user.username) {
          alert('User data saved successfully!');
          window.location.href = `/Welcome/${data.user.username}`;
        } else {
          console.log('Invalid data structure:', data);
          alert('Error saving user data. Invalid data structure.');
        }
      } else {
        console.log(response);
        alert('Error saving user data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div> <h1>Welcome {username}!</h1></div>
        <div style={{ marginBottom: '20px' }}></div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfileForm;
=======
import React, { useState } from 'react';
import logo from './logo.png';


const UserProfileForm = ({ username }) => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, name, phoneNumber, email };

    try {
      const response = await fetch('http://localhost:5001/userprofileform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.user && data.user.username) {
          alert('User data saved successfully!');
          window.location.href = `/Welcome/${data.user.username}`;
        } else {
          console.log('Invalid data structure:', data);
          alert('Error saving user data. Invalid data structure.');
        }
      } else {
        console.log(response);
        alert('Error saving user data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div> <h1>Welcome {username}!</h1></div>
        <div style={{ marginBottom: '20px' }}></div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfileForm;
>>>>>>> corey-work
