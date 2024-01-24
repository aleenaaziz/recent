// SignUp.js

import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; // Import the CSS file for styling

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
