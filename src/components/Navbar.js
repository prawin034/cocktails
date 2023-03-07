import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* MINI PARENT TO GRID ITEMS OR FLEX ITEMS  */}
      <div className="navbar_center">
        {/* NAVBAR LOGO */}
        <div className="navbar_logo">
          <NavLink to="/">
            <img src={logo} alt="LOGO" className="navbar_logo_img" />
          </NavLink>
        </div>
        {/* NAVBAR list  */}
        <ul className="navbar_list">
          <li className="navbar_list_links">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbar_list_link active' : 'navbar_list_link'
              }
              to="/"
            >
              {' '}
              HOME{' '}
            </NavLink>
          </li>
          <li className="navbar_list_links">
            <NavLink className="navbar_list_link" to="/about">
              {' '}
              ABOUT{' '}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
