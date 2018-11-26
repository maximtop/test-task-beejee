import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Header() {
  return (
    <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">BeeJee test task</Link>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
      </ul>
      <span className="navbar-text">
        <Link to="/login" className="nav-link">
            Log in
        </Link>
      </span>
    </nav>
  );
}
