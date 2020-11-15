import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ googleSignOut, isSignedIn }) {
  return (
    <nav className="navbar navbar-dark">
      <Link to="/" class="navbar-brand">
        <img src={process.env.PUBLIC_URL + '/m.jpg'} width="30" height="30" />
        Meet with Me
      </Link>
      <div className="navbar-nav">
        {!!isSignedIn && (
          <button className="btn" type="button" onClick={googleSignOut}>
            Sign out
          </button>
        )}
      </div>
    </nav>
  );
}
