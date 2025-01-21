import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/Login.css';

function Signup() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [username, setUserName] = useState('');

  const handleEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const handleSubmit = async () => {
    if (password && name) {
      setIsSubmitting(true);
      try {
        const userCredential = await firebase.createUser(
          { email, password },
          
        );
        alert('Signup successful!');
        const queryParams = new URLSearchParams(location.search);
        const referral = queryParams.get('referral') || '/';
        navigate(`/${referral}`);
      } catch (error) {
        alert(`Error: ${error.message}`);
        setIsSubmitting(false);
      }
    } else {
      alert('Please enter your password and name.');
    }
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1>Signup</h1>
        <p>It's great to know that you are choosing us as your social partner.</p>
        {!isValidEmail ? (
          <>
            <div className="logincontent email-verify">
            <div className="inputContainer name">
              <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="inputContainer name">
              <input
                placeholder="@username"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
              />
            </div>
              <div className="inputContainer emailAddress">
           
                <input
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <button className="btn-submit continue" onClick={handleEmail}>
                Continue
              </button>
            </div>
            <p className="action-signup">
              Already have an account? <a href="/login?referral=home">Log in</a>
            </p>
          </>
        ) : (
          <div className="logincontent password-verify">
            
            <div className="inputContainer password">
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              className="btn-submit submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
