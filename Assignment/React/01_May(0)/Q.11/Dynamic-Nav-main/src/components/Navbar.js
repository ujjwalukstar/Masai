import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // We'll create this next

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;