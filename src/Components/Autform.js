// AuthForm.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';

const AuthForm = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/v1/user/signupUser', {
        name: username,
        email,
        password,
        phoneNumber
      });
      console.log(response);
      onAuthSuccess();
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/v1/user/loginUser', {
        email,
        password
      });

      console.log(response);
      onAuthSuccess();
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const switchForm = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {isLoggedIn ? (
            <Dashboard username = {username} email={email}/>
          ) : (
            <>
              {isLoginPage ? (
                <>
                  <h2>Login</h2>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="loginEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="loginPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button className="btn btn-success" onClick={handleLogin}>Login</button>
                  <p className="mt-3">Don't have an account? <span className="text-primary" onClick={switchForm}>Switch to SignUp</span></p>
                </>
              ) : (
                <>
                  <h2>Signup</h2>
                  <div className="mb-3">
                    <label htmlFor="signupEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="signupEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="signupPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="signupUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupPhoneNumber" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="signupPhoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  </div>
                  <button className="btn btn-primary" onClick={handleSignup}>Signup</button>
                  <p className="mt-3">Already Registered <span className="text-primary" onClick={switchForm}>Switch to Login</span></p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
