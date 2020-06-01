import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/wyncode logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        <img
          id="wyncode-log"
          src={logo}
          alt="Wyncode Logo"
          style={{ width: '80px' }}
        />
        Wyncode Birthday Tracker
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              All Birthdays
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Add Your Birthday
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
