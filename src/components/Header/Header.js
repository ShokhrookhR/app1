import React from "react";
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header(props) {
  console.log(props.users);

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.img}>
          <img src="https://picsum.photos/200/200" alt="" />
        </div>
        <div className={s.auth}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Log In</NavLink>}
          <div>
            {props.users.map((u) => {
              return u.id === props.userId ? <div>{u.id}</div> : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
