import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Filter from '../components/Filter';
import '../App.css';

function Home() {
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
    <div className="Home">
      <Filter />
      {user ? (
        <div>
          <h2>Welcome, {user.displayName || 'User'}!</h2>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Please sign in to see your profile information.</p>
      )}
    </div>
  );
}

export default Home;
