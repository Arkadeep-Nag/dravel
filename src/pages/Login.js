import React, { useState } from "react";
import "./styles/Login.css";
import { BsApple, BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmail = () => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleSubmit = () => {
    if (password) {
      alert(`Email: ${email}\nPassword: ${password}`);
      
    } else {
      alert("Please enter your password.");
    }
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1>Login</h1>
        <p>It’s great to see you again. Let’s connect and grow together.</p>
        {!isValidEmail ? (
          <>
            <div className="logincontent email-verify">
              <div className="inputContainer emailAddress">
                <input
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <button
                className="btn-submit continue"
                onClick={handleEmail}
              >
                Continue
              </button>
            </div>
            <div className="seperator">
              <div className="line"></div>
              <span>OR</span>
              <div className="line"></div>
            </div>
            <div className="social-sso-pl">
              <div className="social-sso-sing">
                <BsGoogle />
              </div>
              <div className="social-sso-sing">
                <BsFacebook />
              </div>
              <div className="social-sso-sing">
                <BsGithub />
              </div>
              <div className="social-sso-sing">
                <BsApple />
              </div>
            </div>
            <p className="action-signup">
              Never had an account? <a href="/signup?refreral=home">Make one now</a>
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
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
