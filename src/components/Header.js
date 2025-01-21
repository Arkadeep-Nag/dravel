import React, { useState, useEffect } from 'react';
import { CiSearch, CiUser } from "react-icons/ci";
import { FiArrowUpRight } from 'react-icons/fi';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './styles/Header.css';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log('User:', currentUser);
      } else {
        setUser(null);
        console.log('No user is signed in.');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className='header'>
      <div className='header-logo'>
        <h1>Dravel</h1>
      </div>
      <div className='header-right'>
        <ul>
          <li><a href='#'>World</a></li>
          <li><a href='#'>Politics</a></li>
          <li><a href='#'>Sports</a></li>
          <li><a href='#'>Lifestyle</a></li>
          <li><a href='#'>Tech</a></li>
          <li><a href='#'><CiSearch/></a></li>

          {/* Conditional rendering based on whether the user is logged in */}
          <li className="profile-property">
            {user ? (
              <a href="#">
                <CiUser />
                <div className="profile-dropdown">
                  <span>{user.name}</span>
                  <span>@{user.username || 'Username'}</span> {/* Replace with actual username if available */}
                </div>
              </a>
            ) : (
              <a href="/login?redirect=home">
                <CiUser />
                <div className="profile-dropdown">
                  <span>Get Started</span>
                  <FiArrowUpRight />
                </div>
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
