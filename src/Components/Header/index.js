import React from 'react';
import './index.css';

export default function Header() {
  return (
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="/">BeeJee test task</a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
      </ul>
      <span className="navbar-text">
        <a className="nav-link" href="/">
            Log in
        </a>
      </span>
    </nav>
  );
}
