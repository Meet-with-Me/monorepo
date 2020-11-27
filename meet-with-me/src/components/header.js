import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({ googleSignOut, isSignedIn }) {
  return (
    <nav className="navbar navbar-dark">
      <Link to="/" class="navbar-brand">
        <img src={process.env.PUBLIC_URL + '/m.jpg'} width="30" height="30" />
        Meet with Me
      </Link>
      <div className="navbar-nav d-none d-sm-block" id="large-screen-options">
        {!!isSignedIn && (
          <button className="btn" type="button" onClick={googleSignOut}>
            Sign out
          </button>
        )}
      </div>
      <div className="navbar-nav d-sm-none" id="small-screen-options">
        {!!isSignedIn && (
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon className="icon" icon={faBars} />
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <a href="#" className="dropdown-item" onClick={googleSignOut}>
                Sign out
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
