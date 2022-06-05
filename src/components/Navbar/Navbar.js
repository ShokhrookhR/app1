import React from 'react'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends';
import FriendsContainer from './Friends/FriendsContainer';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <div className={s.nav}>
      <div className={s.links}>
        <div className={s.item}>
          <NavLink to="/profile" className={(navData) => (navData.isActive ? s.active : null)}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={'/dialogs'} className={(navData) => (navData.isActive ? s.active : null)}>
            Dialogs
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/carousel" className={(navData) => (navData.isActive ? s.active : null)}>
            Carousel
          </NavLink>
        </div>

        <div className={s.item}>
          <NavLink to="/users" className={(navData) => (navData.isActive ? s.active : null)}>
            Users
          </NavLink>
        </div>
      </div>
      <FriendsContainer />
    </div>
  );
}

export default Navbar