import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container">
      <NavLink exact to='/' className="navbar-brand">DJW Scholarship Fund</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#meanAuthNavbar" aria-controls="meanAuthNavbar"
        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="meanAuthNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to='/' className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about-david' className="nav-link" activeClassName="active">About David</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;