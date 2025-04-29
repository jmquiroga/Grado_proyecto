import React, { useState } from 'react';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {  
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciar sesión con:', username, password);
  };

  return (
    <div className="background">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="avatar-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
              </svg>
            </div>
            <h2 className="login-title">My Account</h2>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="email"
                id="username"
                name="username"
                value={username}
                onChange={handleInputChange}
                placeholder="User@tuemail.com"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="********"
              />
            </div>
            <button type="submit" className="login-button">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
