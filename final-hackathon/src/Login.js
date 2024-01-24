// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
