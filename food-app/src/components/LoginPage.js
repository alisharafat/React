// components/LoginPage.jsx

import React, { useState } from 'react';
import users from '../data/users';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setLoginStatus('Login successful!');
      setIsLoggedIn(true); 
      navigate('/home')

    } else {
      setLoginStatus('Invalid username or password.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '100px',
    textAlign: 'center',
    fontFamily: 'Arial'
  },
  form: {
    display: 'inline-block',
    textAlign: 'left'
  },
  input: {
    display: 'block',
    width: '200px',
    marginBottom: '10px',
    padding: '8px'
  },
  button: {
    width: '100%',
    padding: '8px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default LoginPage;
